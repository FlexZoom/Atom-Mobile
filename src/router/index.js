import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

// 定义路由
import Index from '@/pages/Index';

const SwitchDemo = () => ({
    component: import ('@/pages/SwitchDemo')
});
// 表单元素
import InputDemo from '@/pages/InputDemo';
import CollapseDemo from '@/pages/CollapseDemo';
import TextareaDemo from '@/pages/TextareaDemo';
import RadioDemo from '@/pages/RadioDemo';
import CheckboxDemo from '@/pages/CheckboxDemo';
import PickerDemo from '@/pages/PickerDemo';
import CounterDemo from '@/pages/CounterDemo';
import ButtonDemo from '@/pages/ButtonDemo';
import ButtonGroupDemo from '@/pages/ButtonGroupDemo';
import RangeDemo from '@/pages/RangeDemo';
import RateDemo from '@/pages/RateDemo';

// 对话框
const AlertDemo = () => ({
    component: import ('@/pages/AlertDemo')
});

import ConfirmDemo from '@/pages/ConfirmDemo';
import PromptDemo from '@/pages/PromptDemo';
import PopupDemo from '@/pages/PopupDemo';
import DialogDemo from '@/pages/DialogDemo';
import MaskDemo from '@/pages/MaskDemo';

// 滚动
import ScrollViewDemo from '@/pages/ScrollViewDemo';
import VirtualScrollerDemo from '@/pages/VirtualScrollerDemo';
import AffixDemo from '@/pages/AffixDemo';
import LazyLoadDemo from '@/pages/LazyLoadDemo';


// 布局
import CellDemo from '@/pages/CellDemo';
import GroupDemo from '@/pages/GroupDemo';


// 切换
import TabsDemo from '@/pages/TabsDemo';
import CarouselDemo from '@/pages/CarouselDemo';
import SegmentDemo from '@/pages/SegmentDemo';
import DrawerDemo from '@/pages/DrawerDemo';
import SwipeOutDemo from '@/pages/SwipeOutDemo'

// 辅助
import BadgeDemo from '@/pages/BadgeDemo';
import StepsDemo from '@/pages/StepsDemo';
import TagDemo from '@/pages/TagDemo';
import BreadCrumbDemo from '@/pages/BreadCrumbDemo';
import IconDemo from '@/pages/IconDemo';


// 加载
import SpinnerDemo from '@/pages/SpinnerDemo';
import ProgressDemo from '@/pages/ProgressDemo';
import LoadingDemo from '@/pages/LoadingDemo';

// 提示
import ToastDemo from '@/pages/ToastDemo'
import PopperDemo from '@/pages/PopperDemo'
import QRCodeDemo from '@/pages/QRCodeDemo'

// 手势
import FingerDemo from '@/pages/FingerDemo';
import TouchDemo from '@/pages/TouchDemo';

// 组合
import PopupPickerDemo from '@/pages/PopupPickerDemo'

// 测试
const TestDemo = () => ({
    component: import ('@/pages/Test')
});

export default new Router({
    // mode: "history",

    scrollBehavior(to, from, savedPosition) {
        // log(savedPosition)
        // import locale from '@/locale/lang/zh-CN.js'
        if (savedPosition) {
            return savedPosition
        } else {
            return {
                x: 0,
                y: 0
            }
        }
    },

    routes: [
        {
            path: '/',
            redirect: '/index'
        },
        {
            name: 'index',
            path: '/index',
            component: Index
        },
        {
            name: 'switch',
            path: '/switch',
            component: SwitchDemo
        }, {
            name: 'collapse',
            path: '/collapse',
            component: CollapseDemo
        }, {
            name: 'input',
            path: '/input',
            component: InputDemo
        }, {
            name: 'textarea',
            path: '/textarea',
            component: TextareaDemo
        }, {
            name: 'radio',
            path: '/radio',
            component: RadioDemo
        }, {
            name: 'checkbox',
            path: '/checkbox',
            component: CheckboxDemo
        },
        {
            name: 'picker',
            path: '/picker',
            component: PickerDemo
        },
        {
            name: 'counter',
            path: '/counter',
            component: CounterDemo
        },
        {
            name: 'button',
            path: '/button',
            component: ButtonDemo
        }, {
            name: 'buttonGroup',
            path: '/button-group',
            component: ButtonGroupDemo
        }, {
            name: 'alert',
            path: '/alert',
            component: AlertDemo
        },
        {
            name: 'confirm',
            path: '/confirm',
            component: ConfirmDemo
        },
        {
            name: 'prompt',
            path: '/prompt',
            component: PromptDemo
        }, {
            name: 'popup',
            path: '/popup',
            component: PopupDemo
        }, {
            name: 'dialog',
            path: '/dialog',
            component: DialogDemo
        }, {
            name: 'mask',
            path: '/mask',
            component: MaskDemo
        }, {
            name: 'scrollView',
            path: '/scroll-view',
            component: ScrollViewDemo
        }, {
            name: 'virtual-scroller',
            path: '/virtual-scroller',
            component: VirtualScrollerDemo
        }, {
            name: 'tabs',
            path: '/tabs',
            component: TabsDemo
        }, {
            name: 'cell',
            path: '/cell',
            component: CellDemo
        }, {
            name: 'group',
            path: '/group',
            component: GroupDemo
        }, {
            name: 'affix',
            path: '/affix',
            component: AffixDemo
        }, {
            name: 'carousel',
            path: '/carousel',
            component: CarouselDemo
        }, {
            name: 'finger',
            path: '/finger',
            component: FingerDemo
        },
        {
            name: 'segment',
            path: '/segment',
            component: SegmentDemo
        },
        {
            name: 'badge',
            path: '/badge',
            component: BadgeDemo
        }, {
            name: 'steps',
            path: '/steps',
            component: StepsDemo
        }, {
            name: 'tag',
            path: '/tag',
            component: TagDemo
        }, {
            name: 'bread-crumb',
            path: '/bread-crumb',
            component: BreadCrumbDemo
        },

        {
            name: 'spinner',
            path: '/spinner',
            component: SpinnerDemo
        },
        {
            name: 'progress',
            path: '/progress',
            component: ProgressDemo
        },
        {
            name: 'toast',
            path: '/toast',
            component: ToastDemo
        },
        {
            name: 'popper',
            path: '/popper',
            component: PopperDemo
        },
        {
            name: 'qrcode',
            path: '/qrcode',
            component: QRCodeDemo
        }, {
            name: 'drawer',
            path: '/drawer',
            component: DrawerDemo
        }, {
            name: 'range',
            path: '/range',
            component: RangeDemo
        }, {
            name: 'rate',
            path: '/rate',
            component: RateDemo
        }, {
            name: 'popupPicker',
            path: '/popup-picker',
            component: PopupPickerDemo
        }, {
            name: 'lazyload',
            path: '/lazyload',
            component: LazyLoadDemo
        },
        {
            name: 'icon',
            path: '/icon',
            component: IconDemo
        },
        {
            name: 'swipeOut',
            path: '/swipe-out',
            component: SwipeOutDemo
        },
        {
            name: 'touch',
            path: '/touch',
            component: TouchDemo
        },
        {
            name: 'test',
            path: '/test',
            component: TestDemo
        },
        {
            name: 'loading',
            path: '/loading',
            component: LoadingDemo
        }

    ]
});