import Pill from '../components/Pill.vue'

export default {
    component: Pill,
    title: 'Pill'
}

export const withJSX = () => ({
    render() {
        return (
            <Pill><span style="color: #000">2020</span></Pill>
        );
    }
});
