import { App } from 'vue';
import JpsBtn from './components/JPSBtn/JpsBtn.vue';
import JpsCard from './components/JPSCard/JpsCard.vue';

const components = {
    JpsBtn,
    JpsCard
};


// Exporta los componentes y tipos necesarios
export { JpsBtn, JpsCard };



export default {
    install(app: App) {
        Object.keys(components).forEach((key) => {
            app.component(key, components[key as keyof typeof components]);
        });
        // app.component('JpsBtn', JPSBtn);
        // app.component('JpsCard', JPSCard);
    },
};