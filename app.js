Vue.component("nav-bar", {
    template:
        `
    <nav class="nav">
        <a href="#" v-for="(data, index) in navData" :key="index" :class="navItemClass(data.isIcon)">
            <span v-if="!data.isIcon">{{ data.text }}</span>
            <i v-else :class="data.text"></i>
        </a>
    </nav>
    `,
    props: {
        navData: {
            type: Array,
            required: true
        }
    },
    methods: {
        navItemClass(iconState) {
            return iconState ? "nav__icon" : "nav__item";
        }
    }
});

Vue.component("container", {
    template:
        `
    <div class="container">
		<span class="icon">
			<i :class="iconClass"></i>
        </span>
        <span class="more">
			<i class="fas fa-ellipsis-vertical"></i>
		</span>
    </div>
    `,
    props: {
        iconClass: {
            type: String,
            required: true
        }
    }
});

Vue.component("main-section", {
    template:
        `
    <section class="section">
        <div class="top__side">
            <h1 class="top__title">Google</h1>
            <div class="search__bar">
                <i class="fas fa-search"></i>
                <input type="entry" class="search__input"
                placeholder="Google de arama yapın veya bir URL yazın">
                <i class="fas fa-microphone"></i>
            </div>
        </div>
        
        <div class="down__side">
            <container v-for="(icon, index) in iconClassList" :key="index" :icon-class="icon"></container>
        </div>
    </section>
    `,
    props: {
        iconClassList: {
            type: Array,
            required: true
        }
    }
});

new Vue({
    el: "#app",
    data: {
        navData: [
            { text: "Gmail", isIcon: false },
            { text: "Görseller", isIcon: false },
            { text: "fas fa-calendar-days", isIcon: true },
            { text: "fas fa-user", isIcon: true }
        ],
        icons: ["fab fa-facebook", "fab fa-youtube", "fab fa-twitter", "fas fa-plus"]
    }
});