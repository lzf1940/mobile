module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],
  parserOptions: {
    parser: "babel-eslint",
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off", // allow console during development
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off", // allow debugger during development
    // "prettier/prettier": "off",   // 关闭prettier代码格式化
    // 以下为该项目自定义部分
    // "off" 或 0 - 关闭这个规则检查
    // "warn" 或 1 - 开启这个规则检查并提示（不影响退出状态）
    // "error" 或 2 - 开启规则检查并报错
    // 'indent': [2, 4], // 缩进风格 - 开启缩进4格
    "no-var": "warn", // 要求或禁止 var 声明中的初始化
    "no-extra-semi": "warn", // 禁止不必要的分号
    "no-unused-vars": "warn", // 禁止有声明了却未使用的变量
    "no-mixed-spaces-and-tabs": [1, false], // 禁止混用tab和空格
    "linebreak-style": ["warn", "windows"], // 换行风格
    "comma-dangle": ["warn", "only-multiline"], // 对象字面量项尾逗号  always-multiline
  },
  overrides: [
    {
      files: [
        "**/__tests__/*.{j,t}s?(x)",
        "**/tests/unit/**/*.spec.{j,t}s?(x)",
      ],
      env: {
        jest: true,
      },
    },
  ],
};
