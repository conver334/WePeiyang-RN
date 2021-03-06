let json = {
  common: {
    ok: "好的",
    confirm: "确认",
    cancel: "取消",
    back: "返回",
    close: "关闭",
    gotIt: "了解啦！",
    time: {
      remaining: "还剩 ",
      daysLeft: " 天",
    },
    unknown: "未知",
    prepareToLeave: "将要离开微北洋",
    providedInWebHint: "此服务在 Web 上提供，继续操作将在浏览器中打开链接。",
  },
  data: {
    noAvailableData: "没有可用的数据",
    prepareDataSuccess: "成功获取最新数据",
    prepareDataFailed: "由于网络请求失败，可能有部分数据未成功更新...",
  },
  auth: {
    guestMode: "访客模式",
    checkingAuthStatus: "检查用户认证状态...",
    login: "登录",
    logout: "注销用户",
    loginSuccess: "登录成功",
    loginFailure: "登录失败...",
    logoutSuccess: "已登出用户",
    tokenStoreFailure: "无法在本地存储登录信息。下次启动时可能需要额外的手动登录。",
    tokenDeleteFailure:
      "无法删除本地登录信息。如果问题仍然存在，我们建议您清除系统设置中的App存储，以确保帐户安全。",
  },
  loginScreen: {
    greetings: "再次见到你回来，总是很开心",
    username: "天外天帐号用户名",
    password: "天外天帐号密码",
  },
  homeScreen: {
    greetings: "Hello",
  },
  ecard: {
    noCardsBound: "未绑定校园卡",
    card: "CARD",
    holder: "持卡人",
    expiresBy: "有效期至",
    dailyExpense: "今日消费",
    monthlyExpense: "本月消费",
    billingDetails: "结算明细",
    noTransaction: "在过去 ％{days} 天内无交易记录",
    loadMore: "加载更多",
    rangeHint: "此处显示的数据统计截止到您最近一次消费记录的所在日期。",
  },
  newsScreen: {
    header: "新闻",
  },
  tjuScreen: {
    header: "TJU网络",
  },
  settings: {
    settings: "设置",
    sections: {
      homepage: "主页",
      elsewhere: "Elsewhere",
    },
    hideGpa: "在主页上隐藏GPA",
    owlMode: {
      title: "启用Owl模式",
      on: "在每天晚上21:00之后显示明天的课程表",
      off: "总是显示当天的课程表",
    },
    daysEachWeek: {
      title: "每周显示天数",
      intro: "您可以选择是否要在每周课表中显示非工作日。",
      options: "每周显示 ％{count} 天",
    },
    displayNotThisWeek: {
      title: "绘制非本周课程",
      on:
        "显示那些还未开课的课程。但请注意，如果某个时间段在不同周有不同的非本周课程存在，它们将被重叠绘制。",
      off: "显示随机的课余活动建议。",
    },
    scheduleTextSize: {
      title: "文字大小",
      intro:
        "通常来说，课程表课程的字体大小会根据屏幕尺寸自动调整以适应。如果仍然遇到问题，可以在这里手动调整到理想的字号。",
    },
    autoReconnect: {
      title: "自动重连",
      sub: "发现断开TJU-WLAN后尝试重新连接到网络",
    },
    wpyGithub: {
      title: "WePeiyang on GitHub",
      sub:
        "WePeiyang是一个开源项目，您可以在社区中提问、讨论、帮助翻译、攥写文档，甚至贡献自己的代码。一起帮助改善它！",
    },
    timGroup: "天外天用户社区QQ / TIM群",
    helpNSupport: {
      title: "技术支持",
      sub: "需要帮助？发现问题？欢迎在天外天技术支持社区发帖。",
    },
    language: "语言",
    languageSetting: "语言设定",
    languageWarning:
      "请注意，只有微北洋内部的界面语言与操作语言会被改变。依赖于外部资源的文字，如课程名称、图书名称、错误提示等将保持其原有语言。您可以在GitHub贡献改善翻译更正或改进。",
  },
  accountBinding: {
    greetings: {
      ecard: "连接你的帐户，发现更多可能",
      tju: "连接你的帐户，发现更多可能",
      lib: "连接你的帐户，发现更多可能",
    },
    unbound: "尚未绑定",
    bound: "已绑定",
    bind: "绑定",
    unbind: "解除绑定",
    libraryAccount: "图书馆帐号",
    ecardAccount: "校园一卡通帐号",
    portalAccount: "教务系统（原办公网）帐号",
    yourStudentId: "你的学号或校园身份 ID",
    ecardPassword: "你的 6 位校园卡密码（通常用于 POS 机）",
    etjuPassword: "你的教务系统（原办公网）密码",
    libPassword: "你的图书馆密码",
    libPasswordHint:
      "图书馆密码是用于lib.tju.edu.cn上的登录密码。如果您不知道它是什么，请尝试使用初始密码666666，或身份证号码的第12至17位数字。您也可以咨询天津大学图书馆的咨询台，获取重置密码的相关帮助。",
    bindSuccess: "成功绑定。可能需要额外的重新登录。",
    unbindSuccess: "成功解除绑定。可能需要额外的重新登录。",
    unbindModal: {
      heading: "此帐户目前与微北洋相关联。",
      content: "您可以随时解绑此帐户。解除绑定后，您将无法使用与此帐户相关的服务。",
    },
    unbindEcardHint:
      "要解除绑定你的校园卡，只需要退出登录即可。再次登录时，您的校园卡将被自动解绑。",
    libLatencyHint: "请注意，你的帐户绑定状态将在下次登录后更新。",
    tjuLatencyHint: "请注意，你的帐户绑定状态将在下次登录后更新。",
    ecardHint: "出于安全考虑，在设备上退出登录后，您的校园卡将被自动解绑。",
    networkHint: "出于安全考虑，在设备上退出登录后，您的校园网账户将被自动解绑。",
  },
  tab: {
    wpy: "WPY",
    news: "新闻",
    network: "TJU",
    modules: "模块导航",
  },
  modules: {
    bike: "自行车",
    contact: "黄页",
    learning: "刷题",
    library: "图书馆",
    ecard: "校园卡",
    gpa: "GPA",
    gpaCurve: "GPA曲线",
    classroom: "自习室",
    schedule: "课程表",
    news: "新闻",
    mall: "商城",
    party: "党建",
    network: "校园网",
    vote: "投票",
    survey: "问卷",
    bbs: "BBS",
    docs: "学习平台",
    career: "就业",
    socialPractice: "社会实践",
  },
  gpa: {
    totalWeighted: "总加权",
    totalGpa: "总绩点",
    creditsEarned: "获得学分",
    semestralWeighted: "学期加权",
    semestralGpa: "学期绩点",
    semestralCredits: "获得学分",
    credits: "学分",
    noRadar: "GPA雷达图不适用于少于三门课程成绩的学期。",
    order: {
      orderedBy: "排序依据",
      credits: "学分",
      name: "课程名称",
      score: "成绩",
    },
    info: {
      title: "声明",
      content:
        "我们努力为你提供准确而直观的信息，但它们仅供参考。有关官方算法、政策和GPA成绩单，请咨询学院教务部门。",
    },
    tab: {
      main: "主页",
      exp: "实验室",
    },
    kachi: {
      yourKachiIndex: "你的卡绩指数",
      what: {
        title: "什么是卡绩指数？",
        content:
          "在中文中，Kachi（卡绩）通常意味着获得固定GPA区间中的最高分，如89分。由于分数和GPA之间的官方映射算法并不是连续的，因此，一些学生的GPA可能被显著压低。这就是卡绩指数所描述的指标。",
      },
      how: {
        title: "如何计算卡绩指数？",
        content:
          "我们使用Sigmoid回归来确定一个连续的GPA-分数映射关系，然后计算以此得出的GPA与官方算法的GPA之间的差异，作为卡绩指数的原型。 被卡绩的得分将输出正值，反之则输出负值。最终的卡绩指数是所有课程的卡绩指数的加权平均。",
      },
      howBad: {
        title: "我被卡得很惨吗？",
        content:
          "正常的卡绩指数通常介于-4.0和2.0之间。学生更可能有负卡绩指数，因为教师们通常有撩分的习惯。如果你发现你的卡绩指数大于2，那么可能表明你被卡绩较为严重。",
      },
    },
  },
  schedule: {
    noCourseToday: "阁下今日无事",
    id: "ID",
    logicNo: "逻辑班号",
    campus: "校区",
    location: "上课地点",
    weeks: "起止周",
    time: "时间",
    WEEK: {
      pre: "第 ",
      post: " 周",
    },
  },
  library: {
    noBooks: "你还没有借阅书籍",
    notBound: "图书馆帐号未绑定",
    callNo: "索书号",
    type: "书目类型",
    location: "地点",
    borrowedTime: "借出",
    returnBy: "应还于",
    overdue: "逾期未还",
    renew: "续借",
    renewCaveat:
      "一本书只能续借三次。为避免浪费机会，我们建议您在截止日期临近时续借书籍。是否继续？",
  },
  network: {
    login: "冲浪",
    logout: "靠岸",
    yourUsername: "你的学号或校园身份 ID",
    yourPassword: "你的g.tju.edu.cn密码",
    greetings: "上帝说，“要有网”",
    connected: "于是就有了网。",
    bugHint:
      "有些时候，即便输入正确的密码也可能会返回密码错误的消息。此错误是由天津大学信网中心引起的，偶尔也发生在他们自己的登录页面上。在这种情况下，您可能需要多次尝试。",
  },
  contact: {
    searchBar: "搜索关键字",
    department: "部门",
    noUnit: "部门下无单位",
    infoSource: "信息来源",
    info: {
      title: "关于",
      content: "信息由天津大学办公网提供。要发布您的联系方式或报告错误，请咨询天津大学信网中心。",
    },
  },
}

let arr = []

const iterate = obj => {
  Object.keys(obj).forEach(key => {
    if (typeof obj[key] === "string") {
      arr.push(obj[key])
    }
    if (typeof obj[key] === "object") {
      iterate(obj[key])
    }
  })
}

iterate(json)

let str = ""
arr.forEach(i => {
  str += `
`
  str += i
})

console.log(str)

// =======
