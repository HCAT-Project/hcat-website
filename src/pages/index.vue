<script setup lang="ts" generic="T extends any, O extends any">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const welcome = ref<HTMLDivElement | null>()
const trigger = ref<HTMLDivElement | null>()
const logoH = ref<HTMLDivElement | null>()
const logoCAT = ref<HTMLDivElement | null>()
const divider = ref<HTMLDivElement | null>()
const title1 = ref<HTMLDivElement | null>()
const title2 = ref<HTMLDivElement | null>()
const chatWindowSide = ref<HTMLDivElement | null>()
const chatWindow = ref<HTMLDivElement | null>()

const messageList = $ref<Message[]>([
  {
    user: 'ndxzzy',
    message: '你好',
  },
  {
    user: 'hsn',
    message: '你好',
  },
  {
    user: '咕谷酱',
    message: '你好',
  },
])

const chatList = $ref<Chat[]>([
  {
    name: '一个没有名字的群组',
    avatar: 'i-carbon-group',
    message: 'ndxzzy:你好',
  },
  {
    name: '系统通知',
    avatar: 'i-carbon-notification',
    message: 'ndxzzy通过了您的好友请求',
  },
])

const developerList = $ref<Developer[]>([
  {
    avatar: '/hsn.png',
    name: 'hsn',
    duty: '后端开发',
    personalWebsite: 'https://www.zh314.xyz/',
    github: 'https://github.com/hsn8086',
  }, {
    avatar: '/ndxzzy.png',
    name: 'ndxzzy',
    duty: '前端开发',
    personalWebsite: 'https://ndxzzy.top/',
    github: 'https://github.com/ndxzzy',
  },
  {
    avatar: '/gu.jpg',
    name: '咕谷酱',
    duty: '官网开发',
    personalWebsite: 'https://ggj.moe/',
    github: 'https://github.com/googujiang',
  },
])

onMounted(async () => {
  await new Promise(resolve => setTimeout(resolve, 300))

  const welcomeTl = gsap.timeline({
    scrollTrigger: {
      trigger: trigger.value!,
      start: '-100 top',
      end: '+=300',
      scrub: 1,
    },
  })

  const dividerTl = gsap.timeline({
    scrollTrigger: {
      trigger: divider.value!,
      start: 'bottom 50%',
      end: '+=150',
      scrub: 1,
    },
  })

  const developerTl = gsap.timeline({
    scrollTrigger: {
      trigger: title2.value!,
      start: 'top 50%',
      end: '+=250',
      scrub: 1,
    },
  })

  const chatTl = gsap.timeline({
    scrollTrigger: {
      trigger: divider.value!,
      start: 'top 20%',
      end: '+=200',
      scrub: 1,

      onUpdate: ({ progress, direction, isActive }) => {
        if (progress < 0.33)
          chatList[0].message = 'ndxzzy:你好'

        else if (progress < 0.66 && progress > 0.33)
          chatList[0].message = 'hsn:你好'

        else if (progress > 0.66)
          chatList[0].message = '咕谷酱:你好'
      },
    },
  })

  welcomeTl.to(welcome.value!, {
    opacity: 0,
  }).to(logoH.value!, {
    x: -500,
  }, '<').to(logoCAT.value!, {
    x: 500,
  }, '<')

  dividerTl.from(title1.value!, {
    opacity: 0,
  }).from(chatWindowSide.value!, {
    x: -200,
    opacity: 0,
  }, '<').from(chatWindow.value!, {
    y: 200,
    opacity: 0,
  }, '<')

  developerTl
    .from(title2.value!, {
      opacity: 0,
    }).from('.developerCard', {
      y: 300,
      opacity: 0,
      stagger: 0.2,
    }, '<')

  chatTl.from('.message', {
    y: 10,
    opacity: 0,
    stagger: 0.5,
  })
})

interface Chat {
  name: string
  avatar: string
  message: string
}

interface Message {
  user: string
  message: string
}

interface Developer {
  avatar: string
  name: string
  duty: string
  personalWebsite: string
  github: string
}

function applyForTest() {
  alert('很快就开放测试咯，再等等~~')
}
</script>

<template>
  <div bg="back">
    <div z-50 fixed top-0 inset-0 p="x5" bg-primary h-15 shadow="xl" flex items-center justify-between>
      <div flex items-center gap-3>
        <IconButton icon="i-carbon-menu" />
        <h1 font-bold text="xl">
          首页
        </h1>
      </div>
      <IconButton icon="i-carbon-overflow-menu-vertical " />
    </div>
    <div ref="welcome" fixed flex flex-col w-full items-center top="40">
      <img ref="trigger" src="/logo.png" w-35>
      <div flex text="22" font-bold>
        <p ref="logoH" text="logo">
          H
        </p>
        <p ref="logoCAT" text="white">
          CAT
        </p>
      </div>
      <p font-bold text="md:3xl 2xl" m="y5 x5">
        致力于成为真正小而美的在线网页聊天程序
      </p>
      <div flex gap-10 text-xl font-bold>
        <button bg-primary p="x8 y3" rounded-full @click="applyForTest">
          申请测试
        </button>
        <button op50 bg-primary disabled rounded-full p="x8 y3">
          即将到来
        </button>
      </div>
    </div>
    <img md:flex hidden src="/98483067_p0.jpg">
    <img h-screen w-full object-cover md:hidden flex src="/98483067_p0-phone.jpg">
    <div ref="divider" bg="divider" h-10 />
    <p ref="title1" font-bold text-3xl m="y8">
      聊天界面
    </p>
    <div grid grid-cols-12 h-150 gap-5 mx-auto px="10">
      <div ref="chatWindowSide" border="~" shadow="lg" of-hidden hidden col-span-0 md:col-span-3 md:flex flex-col bg="chatBox" rounded="xl">
        <ChatItem v-for="item, index in chatList" :key="item.name" :avatar="item.avatar" :name="item.name" :message="item.message" :selected="index === 0" />
      </div>
      <div ref="chatWindow" border="~" shadow="lg" rounded="xl" col-span-12 md:col-span-9 bg="chatBox" flex flex-col justify-between p-5>
        <div gap-10 items-start flex flex-col>
          <p font-bold text-xl>
            一个没有名字的群组
          </p>
          <div flex flex-col gap-2>
            <MessageItem v-for="item in messageList" :key="item.user" class="message" :user="item.user" :message="item.message" />
          </div>
        </div>
        <div>
          <input bg="transparent" w-full outline-none text-md placeholder="输入回车后发送">
        </div>
      </div>
    </div>
    <div ref="title2" p="y8">
      <p font-bold text-3xl>
        开发人员
      </p>
    </div>
    <div grid="~ md:cols-3 cols-1" md:mx-30 mx-10 gap-10>
      <DeveloperCard
        v-for="item in developerList"
        :key="item.name"
        class="developerCard"
        :avatar="item.avatar" :name="item.name" :duty="item.duty"
        :personal-website="item.personalWebsite" :github="item.github"
      />
    </div>
    <div text="3xl" font-bold m="y20">
      页面正在施工中...
    </div>
    <div text-xm op20>
      -HCAT-
    </div>
  </div>
</template>
