/** @type {import('@vivliostyle/cli').VivliostyleConfigSchema} */
module.exports = {
  entry: [
    {
      path: "README.md",
      output: "Resume_JA.pdf",
      title: "職務経歴書 - 原田侑亮",
    },
    {
      path: "README_EN.md",
      output: "Resume_EN.pdf",
      title: "Curriculum Vitae - Yusuke Harada",
    },
  ],
  size: "A4",
  theme: "style/resume.css",
};
