
import SvgIcon from '@/components/SvgIcon/index.vue'
import pagesm from '@/components/pagesm/index.vue'

const Gcomponents = { SvgIcon, pagesm }
export default {
    //@ts-ignore
    install(app) {
        Object.keys(Gcomponents).forEach(key => {
            app.component(key, Gcomponents[key])
        })
    }
}
