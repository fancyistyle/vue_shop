import Vue from 'vue'
import { Button,Message,Form,FormItem,Input } from 'element-ui'



Vue.use(Button).use(Form).use(FormItem).use(Input)
Vue.prototype.$message = Message