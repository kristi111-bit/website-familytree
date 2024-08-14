<template>
  <div>
    <div ref="tree" class="family-tree"></div>
    <div class="controls">
      <i @click="zoomIn" class="mdi mdi-magnify-plus control-icon"></i>
      <i @click="zoomOut" class="mdi mdi-magnify-minus control-icon"></i>
    </div>
  </div>
</template>

<script>
import * as d3 from "d3";

export default {
  name: "Family",
  props: {
    data: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      familyMembers: [],
      zoomLevel: 1,
      translate: [0, 0],
      isDragging: false,
      start: [0, 0],
      relationships: [
        { value: 'mother', label: 'Мать' },
        { value: 'father', label: 'Отец' },
        { value: 'son', label: 'Сын' },
        { value: 'daughter', label: 'Дочь' },
      ]
    };
  },
  mounted() {
    this.familyMembers = this.data;
    this.createFamily();
  },
  methods: {
    createFamily() {
      const margin = { top: 1000, right: 100, bottom: 100, left: 100 },
        width = 1600 - margin.left - margin.right,
        height = 1300 - margin.top - margin.bottom;

      this.translate[1] = width / 4;
      this.translate[1] = height / 2;

      d3.select(this.$refs.tree).select("svg").remove();

      const newSvg = d3
        .select(this.$refs.tree)
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .on("mousedown", this.onMouseDown)
        .on("mouseup", this.onMouseUp)
        .on("mousemove", this.onMouseMove)
        .append("g")
        .attr("transform", `translate(${this.translate[0]},${this.translate[1]}) scale(${this.zoomLevel})`);

      const root = d3
        .stratify()
        .id(d => d.id)
        .parentId(d => d.parent)(this.familyMembers);

      const treeLayout = d3.tree().size([height, width]);
      treeLayout(root);

      const offset = 200;

      root.each((d) => {
        const parent = d.parent;

        if (parent) {
          const siblingCount = parent.children ? parent.children.length : 0;
          const index = siblingCount > 0 ? parent.children.indexOf(d) : 0;

          if (d.data.name === 'Сын' || d.data.name === 'Дочь') {
            d.y = parent.y - (siblingCount > 1 ? (siblingCount - 2) * offset / 2 : 0) + index * offset;
            d.x = parent.x - 190;
          } else if (d.data.name === 'Мать' || d.data.name === 'Отец') {
            d.y = parent.y - (siblingCount > 1 ? (siblingCount - 1) * offset / 3 : 0) + index * offset;
            d.x = parent.x + 300;
          }
        } else {
          d.x = height / 2;
          d.y = width / 2;
        }
      });

      this.drawLinks(newSvg, root);
      this.drawNodes(newSvg, root);
    },

    drawLinks(svg, root) {
      svg.selectAll(".link")
        .data(root.links())
        .enter()
        .append("path")
        .attr("class", "link")
        .attr("d", (d) => `M${d.source.y},${d.source.x} 
                            L${d.target.y},${d.source.x} 
                            L${d.target.y},${d.target.x}`)
        .style("fill", "none")
        .style("stroke-width", "2px")
        .style("stroke", (d) => {
          const sourceName = d.source.data.name;
          if (sourceName === 'Я') {
            if (d.target.data.name === 'Мать' || d.target.data.name === 'Отец' || d.target.data.name === 'Брат' || d.target.data.name === 'Сестра') {
              return "blue";
            } else if (d.target.data.name === 'Сын' || d.target.data.name === 'Дочь') {
              return "red";
            }
          }
          return "green";
        });
    },

    drawNodes(svg, root) {
      const nodes = svg.selectAll(".node")
        .data(root.descendants())
        .enter()
        .append("g")
        .attr("class", "node")
        .attr("transform", (d) => `translate(${d.y},${d.x})`);

      nodes.append("rect")
        .attr("width", 80)
        .attr("height", 30)
        .attr("rx", 5)
        .style("fill", "rgb(115, 0, 255)");

      nodes.append("text")
        .attr("dy", "20")
        .attr("x", (d) => (d.children ? 60 : 25))
        .style("text-anchor", (d) => (d.children ? "end" : "start"))
        .text((d) => d.data.name);

      const inputGroups = nodes.append("g")
        .attr("class", "input-group")
        .attr("transform", "translate(0, 35)");

      const select = inputGroups.append("foreignObject")
        .attr("width", 80)
        .attr("height", 40)
        .append("xhtml:div")
        .html(this.buildSelectHTML());

      inputGroups.select(".add-button").on("click", (event) => this.addFamilyMember(event));
    },

    buildSelectHTML() {
      return `
        <select class="relationship-select">
          <option value=""> </option>
          ${this.relationships.map(r => `<option value="${r.value}">${r.label}</option>`).join('')}
        </select>
        <button class="add-button violet-button">
          <i class="mdi mdi-plus-circle"></i> 
        </button>
      `;
    },

    addFamilyMember(event) {
      const selectedRelationship = d3.select(event.currentTarget.parentNode).select("select.relationship-select").node().value;

      if (!selectedRelationship) {
        alert("Пожалуйста, выберите родство.");
        return;
      }

      const parentId = d3.select(event.currentTarget.parentNode.parentNode).datum().id;

      const hasMother = this.familyMembers.some(member => member.parent === parentId && member.name === 'Мать');
      const hasFather = this.familyMembers.some(member => member.parent === parentId && member.name === 'Отец');

      if (selectedRelationship === 'mother' && hasMother) {
        alert("Уже добавлена мать для этого члена семьи.");
        return;
      }

      if (selectedRelationship === 'father' && hasFather) {
        alert("Уже добавлен отец для этого члена семьи.");
        return;
      }

      const newName = this.getNewFamilyMemberName(selectedRelationship);
      const newId = (this.familyMembers.length + 1).toString();

      this.familyMembers.push({ id: newId, name: newName, parent: parentId });

      d3.select(event.currentTarget.parentNode).select("select.relationship-select").node().value = "";

      this.createFamily();
    },

    getNewFamilyMemberName(relationship) {
      const names = {
        mother: 'Мать',
        father: 'Отец',
        son: 'Сын',
        daughter: 'Дочь',
      };
      return names[relationship] || 'Новый член семьи';
    },

    zoomIn() {
      this.zoomLevel *= 1.2;
      this.createFamily();
    },

    zoomOut() {
      this.zoomLevel /= 1.2;
      this.createFamily();
    },

    onMouseDown(event) {
      this.isDragging = true;
      this.start = [event.clientX, event.clientY];
    },

    onMouseMove(event) {
      if (!this.isDragging) return;

      const dx = event.clientX - this.start[0];
      const dy = event.clientY - this.start[1];

      this.translate[0] += dx;
      this.translate[1] += dy;

      d3.select(this.$refs.tree).select("svg > g")
        .attr("transform", `translate(${this.translate[0]}, ${this.translate[1]}) scale(${this.zoomLevel})`);

      this.start = [event.clientX, event.clientY];
    },

    onMouseUp() {
      this.isDragging = false;
    },
  }
};
</script>

<style>
.family-tree {
  border: 1px solid #ccc;
  width: 100%;
  height: 900px;
  overflow: hidden;
  position: relative;
  cursor: grab;
}

.family-tree:active {
  cursor: grabbing;
}

.add-button {
  border: none;
  background: none;
  cursor: pointer;
}

.violet-button {
  font-size: 23px;
  color: rgb(97, 119, 237);
  display: flex;
  margin-left: 22px;
  margin-top: -2px;
}

.control-icon {
  font-size: 28px;
  color: rgb(97, 119, 237);
  cursor: pointer;
  margin: 0 10px;
}

.controls {
  display: flex;
  justify-content: center;
  align-items: center;
}

.link {
  fill: none;
  stroke: #ccc;
  stroke-width: 2px;
}

.node rect {
  fill: rgb(97, 119, 237);
  stroke: rgb(47, 47, 47);
  stroke-width: 2px;
}

.input-group {
  text-align: center;
}

.relationship-select {
  border-radius: 1px;
}
</style>