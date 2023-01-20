gsap.registerPlugin(ScrollTrigger);
let tl = gsap.timeline({
    scrollTrigger: {
    trigger: ".page-warp",
    start: "70% 90%", // 当 phone-wrap 元素底部，滚动到可视区域底部时, 开始动画
    end: "70% top", // 当 phone-wrap 底部，到达可视区域顶部的时候，结束动画
    scrub: true, // 表示动画可以重复执行改成false表示只执行一次
    markers: false, // 绘制开始位置和结束位置的线条
    pin: true, // 动画执行期间，页面不进行滚动，动画执行结束后
  }
});
tl.fromTo(".box-text-h", { 
    x: 0,
}, {
    x: -1000,
},"<");

tl.fromTo(".box-text-cat", { 
    x: 0,
}, {
    x: 1000,
    display:"none"
},"<");

tl.fromTo(".box-button-nne", { 
    opacity: 1
}, {
    display:"none",
    opacity: 0
},"<");

tl.fromTo(".box-text-info", { 
    opacity: 1
}, {
    display:"none",
    opacity: 0
},"<");

tl.fromTo(".title-img", { 
    opacity: 1
}, {
    display:"none",
    opacity: 0
},"<");

let tl_1 = gsap.timeline({
    scrollTrigger: {
    trigger: ".page-warp-2 ",
    start: "10% 70%", // 当 phone-wrap 元素底部，滚动到可视区域底部时, 开始动画
    end: "70% 70%", // 当 phone-wrap 底部，到达可视区域顶部的时候，结束动画
    scrub: true, // 表示动画可以重复执行改成false表示只执行一次
    markers: false, // 绘制开始位置和结束位置的线条
    pin: false, // 动画执行期间，页面不进行滚动，动画执行结束后
  }
});

tl_1.fromTo(".text-ltjm", { 
    opacity: 0
}, {
    opacity: 1
},"<");

tl_1.fromTo(".left-gugu", { 
    x:-1000
}, {
    x:0
},"<");

tl_1.fromTo(".r-gugu", {
    display:"none",
    y: 500
}, {
    display:"block",
    y:0
},"<");

tl_1.fromTo(".message-1", {
    display:"none",
    y: 10,
    opacity: 0
}, {
    display:"block",
    y:0,
    opacity: 1
},1);

tl_1.fromTo(".info-message-1", {
    display:"block",
    opacity: 1
}, {
    display:"none",
    opacity: 0
},2);




tl_1.fromTo(".message-2", {
    display:"none",
    y: 10,
    opacity: 0
}, {
    display:"block",
    y:0,
    opacity: 1
},3);

tl_1.fromTo(".info-message-2", {
    display:"block",
    opacity: 1
}, {
    display:"none",
    opacity: 0
},4);

tl_1.fromTo(".message-3", {
    display:"none",
    y: 10,
    opacity: 0
}, {
    display:"block",
    y:0,
    opacity: 1
},5);

tl_1.fromTo(".info-message-3", {
    display:"none",
    opacity: 0
}, {
    display:"block",
    opacity: 1
},5);

let tl_2 = gsap.timeline({
    scrollTrigger: {
    trigger: ".page-warp-3",
    start: "10% 70%", // 当 phone-wrap 元素底部，滚动到可视区域底部时, 开始动画
    end: "60% 70%", // 当 phone-wrap 底部，到达可视区域顶部的时候，结束动画
    scrub: true, // 表示动画可以重复执行改成false表示只执行一次
    markers: false, // 绘制开始位置和结束位置的线条
    pin: false, // 动画执行期间，页面不进行滚动，动画执行结束后
  }
});

tl_2.fromTo(".text-kfry", { 
    opacity: 0
}, {
    opacity: 1
},0.5);

tl_2.fromTo(".card-1", {
    display:"none",
    y: 500
}, {
    display:"block",
    y:0
},1);

tl_2.fromTo(".card-2", {
    display:"none",
    y: 500
}, {
    display:"block",
    y:0
},2);

tl_2.fromTo(".card-3", {
    display:"none",
    y: 500
}, {
    display:"block",
    y:0
},3);

let tl_3 = gsap.timeline({
    scrollTrigger: {
    trigger: ".page-warp-4",
    start: "10% 70%", // 当 phone-wrap 元素底部，滚动到可视区域底部时, 开始动画
    end: "30% 70%", // 当 phone-wrap 底部，到达可视区域顶部的时候，结束动画
    scrub: true, // 表示动画可以重复执行改成false表示只执行一次
    markers: false, // 绘制开始位置和结束位置的线条
    pin: false, // 动画执行期间，页面不进行滚动，动画执行结束后
  }
});

tl_3.fromTo(".text-ymsg", {
    display:"none",
    y: 500
}, {
    display:"block",
    y:0
},"<");