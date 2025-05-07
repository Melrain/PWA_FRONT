export interface IntroPiece {
  text: string;
  highlight?: boolean;
  color?: string;
}

export interface ProfileData {
  greeting: string;
  description: (string | IntroPiece)[];
  techTags: string[];
}

export const profileData: Record<"zh" | "en", ProfileData> = {
  zh: {
    greeting: "欢迎来到我的空间!",
    description: [
      "我是一名 ",
      { text: "Web3", highlight: true, color: "text-indigo-400" },
      " 全栈工程师，擅长构建去中心化应用。",
      "熟悉 ",
      { text: "Next.js", highlight: true, color: "text-green-400" },
      { text: "NestJS", highlight: true, color: "text-red-400" },
      { text: "WebSocket", highlight: true, color: "text-yellow-400" },
      " 等技术。",
      "这个页面展示了一些技术 Demo，包括钱包登录、AA 账户、代币操作、NFT 展示等模块。",
      "我热衷于将 ",
      { text: "前端交互", highlight: true, color: "text-pink-400" },
      " 与 ",
      { text: "区块链智能合约", highlight: true, color: "text-blue-400" },
      " 紧密结合，打通完整体验。",
      "如果你对 ",
      { text: "合作开发", highlight: true, color: "text-emerald-400" },
      " 或 ",
      { text: "技术咨询", highlight: true, color: "text-cyan-400" },
      " 感兴趣，欢迎随时联系我！",
    ],
    techTags: [
      "AA账户",
      "Gasless",
      "NFT",
      "ERC20",
      "Solidity",
      "Solana",
      "ICP",
      "TON",
    ],
  },

  en: {
    greeting: "Welcome to my space!",
    description: [
      "I'm a ",
      { text: "Web3", highlight: true, color: "text-indigo-400" },
      " full-stack engineer focusing on decentralized applications.",
      "Skilled in ",
      { text: "Next.js", highlight: true, color: "text-green-400" },
      { text: "NestJS", highlight: true, color: "text-red-400" },
      { text: "WebSocket", highlight: true, color: "text-yellow-400" },
      " and more.",
      "This page includes several demos showcasing tech implementations, such as wallet login, AA accounts, token interaction, and NFT modules.",
      "I enjoy combining ",
      { text: "frontend experience", highlight: true, color: "text-pink-400" },
      " with ",
      {
        text: "blockchain smart contracts",
        highlight: true,
        color: "text-blue-400",
      },
      " to deliver full-stack Web3 solutions.",
      "If you're interested in ",
      { text: "collaboration", highlight: true, color: "text-emerald-400" },
      " or ",
      { text: "technical consulting", highlight: true, color: "text-cyan-400" },
      ", feel free to reach out!",
    ],
    techTags: [
      "AA",
      "Gasless",
      "NFT",
      "ERC20",
      "Solidity",
      "Solana",
      "ICP",
      "TON",
    ],
  },
};
