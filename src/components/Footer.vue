<template>
    <footer class="footer">
        <div class="footer-columns">
            <div class="footer-column">
                <h2>Компания</h2>
                <button>О нас</button>
                <button>Франшиза</button>
                <button>Стать агентом</button>
                <button>Стать исследователем</button>
                <button>Инвесторам</button>
                <button>Команда</button>
                <button>Контакты</button>
            </div>
            <div class="footer-column">
                <h2>Некоммерческая деятельность</h2>
                <button>Фонд</button>
                <button>Генеалогический диктант</button>
                <button>Открытый генеалогический <br> онлайн-курс для школьников</button>
            </div>
            <div class="footer-column">
                <h2>Документы</h2>
                <button>Положение по обработке <br>персональных данных</button>
                <button>Пользовательское соглашение</button>
            </div>
        </div>

        <hr class="divider" />

        <div class="footer-bottom">
            <div class="logos">
                <svg-icon type="mdi" :path="path" style="fill: white;"></svg-icon>
                <div class="logo-text">
                    <span class="logo-title">FamilyTree</span>
                    <p class="logo-subtitle">© 2024 «ФэмилиТри»</p>
                </div>
            </div>
            <div class="icons">
                <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                    <svg-icon type="mdi" :path="youtubePath" alt="YouTube Icon" class="icon-white"></svg-icon>
                </a>
                <a href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer">
                    <svg-icon type="mdi" :path="whatsappPath" alt="WhatsApp Icon" class="icon-white"></svg-icon>
                </a>
                <a href="https://web.telegram.org/" target="_blank" rel="noopener noreferrer">
                    <svg-icon type="mdi" :path="sendPath" alt="Send Icon" class="icon-white"></svg-icon>
                </a>
                <a href="tel:+1234567890" target="_blank" rel="noopener noreferrer">
                    <svg-icon type="mdi" :path="phonePath" alt="Phone Icon" class="icon-white"></svg-icon>
                </a>
                <a href="mailto:your-email@example.com" target="_blank" rel="noopener noreferrer">
                    <svg-icon type="mdi" :path="emailPath" alt="Email Icon" class="icon-white"></svg-icon>
                </a>
            </div>
        </div>
    </footer>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiYoutube, mdiWhatsapp, mdiSend, mdiPhone, mdiEmail, mdiHumanFemaleFemaleChild } from '@mdi/js';

export default {
    name: 'FooterComponent',
    components: {
        SvgIcon
    },
    data() {
        return {
            youtubePath: mdiYoutube,
            whatsappPath: mdiWhatsapp,
            sendPath: mdiSend,
            phonePath: mdiPhone,
            emailPath: mdiEmail,
            path: mdiHumanFemaleFemaleChild,
        };
    },
};
</script>

<style scoped>
.footer {
    background-color: #333;
    color: white;
    padding-left: 150px;
    padding-right: 150px;
    padding-top: 50px;
    padding-bottom: 70px;
}

.footer-columns {
    display: flex;
    justify-content: space-between;
}

.footer-column {
    flex: 1;
}

.footer-column:last-child {
    margin-right: 400px;
}

.footer-column:nth-child(2) {
    margin-right: 80px;
}

.footer-column h2 {
    margin-bottom: 10px;
    margin-left: 5px;
    font-size: 15px;
}

.footer-column button {
    display: block;
    margin-bottom: 5px;
    background: none;
    color: white;
    border: none;
    padding: 5px;
    cursor: pointer;
    font-size: 12px;
    text-align: left;
}

.footer-column button:hover {
    background: none;
    color: #808080;
}

.divider {
    margin: 40px 0;
    border: none;
    height: 0.5px;
    background-color: rgb(227, 227, 227);
}

.footer-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logos {
    display: flex;
}

.logo-text {
    margin-left: 10px;
}

.logo-title {
    font-size: 25px;
    color: white;
}

.logo-subtitle {
    font-size: 12px;
    color: white;
    margin-top: 10px;
    margin-left: -34px;
}

.icons {
    display: flex;
    gap: 20px;
}

.icon-white {
    color: white;
}

.icon-white:hover {
    color: #808080;
}
</style>