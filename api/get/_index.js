const endpoints = [
  {
    title: "用户登录接口",
    url: "/user/login"
  },
  {
    title: "Classic 模板数据列表",
    url: "/template/listOfficial/classic"
  },
  {
    title: "Funky 工具列表接口",
    url: "/collage/funky"
  },
  {
    title: "design 分类模板页接口",
    url: "/template/design"
  },
  {
    title: "collage 分类模板页接口",
    url: "/template/collage"
  },
  {
    title: "cloud Image接口",
    url: "/v2/userResource/list"
  },
  {
    title: "myDesignList接口",
    url: "/v2/project/list/design"
  },
  {
    title: "myCollageList接口",
    url: "/v2/project/list/collage"
  },
  {
    title: "Edit/Basic 工具列表接口",
    url: "/collage/basic"
  }
];

module.exports = {
  path: "/",
  render: function(req, res) {
    const html = ["<h1>APIs</h1><ul>"];
    endpoints.map(i =>
      html.push(`
<li>
  <h3 style="margin-bottom: .5em;">${i.title}</h3>
  <a href="${i.url}">${i.url}</a>
</li>`)
    );
    html.push("</ul>");

    res.send(200, html.join(""));
  }
};
