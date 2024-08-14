<template>
    <header class="header1">
        <div class="logo">
            <svg-icon type="mdi" :path="path" class="header-icon"></svg-icon>
            <h1>
                Family<span class="purple-text">Tree</span>
            </h1>
        </div>
        <nav class="nav">
            <ul>
                <li>
                    <a @click.prevent="navigate('tree')" :class="{ active: isActive('tree') }">‹ Древо ›</a>
                </li>
                <li @mouseover="showResearchDropdown = true" @mouseleave="showResearchDropdown = false">
                    <a @click.prevent="navigate('research')" :class="{ active: isActive('research') }">‹ Исследования
                        ›</a>
                    <div v-if="showResearchDropdown" class="dropdown">
                        <button @click.prevent="handleDropdownClick('archive')">Запросы в архив</button>
                        <button @click.prevent="handleDropdownClick('marketplace')">Маркетплейс исполнителей</button>
                        <button @click.prevent="handleDropdownClick('turnkey')">Исследование "под ключ"</button>
                        <button @click.prevent="handleDropdownClick('consultations')">Консультации</button>
                        <button @click.prevent="handleDropdownClick('surnameAnalysis')">Анализ фамилии</button>
                        <button @click.prevent="handleDropdownClick('expertTariff')">Тариф "Эксперт"</button>
                    </div>
                </li>
                <li @mouseover="showKnowledgeBaseDropdown = true" @mouseleave="showKnowledgeBaseDropdown = false">
                    <a @click.prevent="navigate('knowledgeBase')" :class="{ active: isActive('knowledgeBase') }">‹ База
                        знаний ›</a>
                    <div v-if="showKnowledgeBaseDropdown" class="dropdown">
                        <button @click.prevent="handleDropdownClick('surnames')">Фамилии</button>
                        <button @click.prevent="handleDropdownClick('names')">Имена</button>
                    </div>
                </li>
                <li>
                    <a @click.prevent="navigate('blog')" :class="{ active: isActive('blog') }">‹ Блог ›</a>
                </li>
            </ul>
        </nav>
        <div class="profile" @click.prevent="navigate('profile')">
            <p>Профиль</p>
            <mdiAccountCircleOutline />
        </div>
    </header>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiHumanMaleFemaleChild } from '@mdi/js';
import mdiAccountCircleOutline from 'vue-material-design-icons/AccountCircleOutline.vue';

export default {
    name: "my-component",
    components: {
        SvgIcon,
        mdiAccountCircleOutline,
    },
    data() {
        return {
            path: mdiHumanMaleFemaleChild,
            activePage: null,
            showResearchDropdown: false,
            showKnowledgeBaseDropdown: false,
        };
    },
    methods: {
        navigate(page) {
            this.activePage = page;
            console.log(`Navigating to ${page}`);

            if (page === 'tree') {
                this.$emit('openFamilyTree');
            }
        },
        handleDropdownClick(option) {
            console.log(`Selected option: ${option}`);
        },
        isActive(page) {
            return this.activePage === page;
        },
    },
};
</script>

<style scoped>
.header1 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 100px;
    background-color: #ffffff;
    margin-bottom: 20px;
}

.logo {
    display: flex;
    align-items: center;
}

.header-icon {
    margin-left: 75px;
    margin-right: -65px;
    width: 35px;
    height: 35px;
    margin-top: -7px;
}

.logo h1 {
    font-weight: bold;
    font-size: 30px;
    margin-left: 75px;
}

.nav ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    font-weight: bold;
    font-size: 18px;
    margin-right: 65px;
    position: relative;
}

.nav li {
    margin: 0 20px;
    position: relative;
}

.nav li a {
    text-decoration: none;
    color: black;
    position: relative;
    cursor: pointer;
}

.nav li a:hover {
    color: rgb(97, 119, 237);
}

.nav li a.active {
    color: rgb(97, 119, 237);
}

.dropdown {
    position: absolute;
    top: 100%;
    left: 0;
    background-color: white;
    border: 0px solid #ccc;
    border-radius: 15px;
    z-index: 1000;
    min-width: 200px;
    padding: 10px;
    display: flex;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    flex-direction: column;
}

.dropdown button {
    background: none;
    border: none;
    padding: 10px;
    text-align: left;
    width: 100%;
    cursor: pointer;
}

.dropdown button:hover {
    background-color: rgb(97, 119, 237);
    color: white;
    border-radius: 15px;
}

.profile {
    display: flex;
    align-items: center;
    cursor: pointer;
    color: black;
    margin-right: 85px;
}

.profile:hover {
    color: rgb(97, 119, 237);
}

.profile p {
    font-weight: bold;
    font-size: 18px;
    padding: 0 10px 2px 0;
}

.purple-text {
    color: rgb(97, 119, 237);
}
</style>