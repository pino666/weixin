import REG from './components/Reg'
import REGFAILED from './components/RegFailed.vue'
import SIGN from './components/Sign.vue'
import SIGNSUCCEED from './components/SignSucceed.vue'
import SIGNFAILED from './components/SignFailed'
import SIGNOUTSUCCEED from './components/SignOutSucceed.vue'
import SIGNOUTFAILED from './components/SignOutFailed.vue'

export default [{     //路由
     path: '/',
     redirect: '/REG' 
},
{
    path:'/reg',
    component: REG
},
{
    path:'/regfailed',
    component: REGFAILED
},
{
    name: 'sign',
    path: '/sign',
    component: SIGN
},
{
    path: '/signsucceed',
    component: SIGNSUCCEED
},
{
    path: '/signfailed',
    component: SIGNFAILED
},
{
    path: '/signoutsucceed',
    component: SIGNOUTSUCCEED
},
{
    path: '/signoutfailed',
    component: SIGNOUTFAILED
},
]


