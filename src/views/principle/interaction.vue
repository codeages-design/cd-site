<template>
  <div class="desc-content">
    <div class="desc-content-title">简化交互</div>
    <div class="coh-row">
      <span>根据费茨法则（Fitts's Law）所描述的，如果用户鼠标移动距离越少、对象相对目标越大，那么用户越容易操作。通过运用上下文工具（即：放在内容中的操作工具），使内容和操作融合，从而简化交互。</span>
      <div class="friendly-content-info">
        <div class="desc-content-info__l"><span class="desc-content-info-name">01.实时可见</span></div>
        <div class="bou-content-info__r">
          <span>如果某个操作非常重要，就应该把它放在界面中，并实时可见。</span>
        </div>
        <img
          class="coh-img"
          src="static/img/principle/interaction01.png"
          alt=""
        > 
      </div>
      <div class="friendly-content-info">
        <div class="desc-content-info__l"><span class="desc-content-info-name">02.悬停即现</span></div>
        <div class="bou-content-info__r">
          <span>如果某个操作不那么重要，或者保持“实时可见”过于干扰会影响用户阅读时，可以在悬停在该对象上时展示操作项。</span>
        </div>
        <img
          class="coh-img"
          src="static/img/principle/interaction02.png"
          alt=""
        >
      </div>
      <div class="friendly-content-info">
        <div class="desc-content-info__l"><span class="desc-content-info-name">03.开关显示</span></div>
        <div class="bou-content-info__r">
          <span>如果某些操作只需要在特定模式时显示，可以通过开关来实现。</span>
        </div>
        <img
          class="coh-img"
          src="static/img/principle/interaction03.png"
          alt=""
        >
      </div>
      <div class="friendly-content-info">
        <div class="desc-content-info__l"><span class="desc-content-info-name">04.可视区域 ≠ 可点击区域</span></div>
        <div class="bou-content-info__r">
          <span>在使用 Table 时，文字链接（或图标按钮）的点击范围受到文字长短影响，可以设置整个单元格为热区，以便用户触发。
当需要增强按钮的响应性时，可以通过增加用户点击热区的范围，而不是增大按钮形状，从而增强响应性，又不缺失美感(在移动端尤其适用)。</span>
        </div>
        <img
          class="coh-img"
          src="static/img/principle/interaction04.png"
          alt=""
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>