<template>
  <div>
    <div class="site-content-title">色彩</div>
    <div class="site-content-des">
      颜色是设计语言中非常重要的一块内容，因为不同颜色能够给用户带来截然不同的心里感知，
      我们在 Codeages Design 中定义了主色调以及场景色，所谓场景色，就是指颜色本身的属性能够唤起用户自主意识对颜色的感受，
      例如红色对于用户来说，意味着“危险、错误”，而绿色对于用户来说，则意味着“安全、成功”，通过不同场景色的引入，能够在不同交互场景下通过颜色快速表达意图，从而减少用户理解成本。
    </div>
    <div class="cd-row">
	  <div class="cd-md-8">
	    <div class="color-palette">
	    	<div class="palette-primary">
	    		<span class="text-left-top">Primary</span>
	    		<span class="text-right-bottom">#43BC60</span>
	    	</div>
	    	<div class="palette-primary-dark">
	    		<span class="text-left">P-Dark</span>
	    		<span class="text-right">#36964D</span>
	    	</div>
	    	<div class="palette-primary-light">
	    		<span class="text-left">P-Light</span>
	    		<span class="text-right">#D9F2DF</span>
	    	</div>
	    </div>
	  </div>
	  <div class="cd-md-8">
	   <div class="color-palette">
	    	<div class="palette-info">
	    		<span class="text-left-top">Info</span>
	    		<span class="text-right-bottom">#43BC60</span>
	    	</div>
	    	<div class="palette-info-dark">
	    		<span class="text-left">I-Dark</span>
	    		<span class="text-right">#43BC60</span>
	    	</div>
	    	<div class="palette-info-light">
	    		<span class="text-left">I-Light</span>
	    		<span class="text-right">#43BC60</span>
	    	</div>
	    </div>
	  </div>
	  <div class="cd-md-8">
	   <div class="color-palette">
	    	<div class="palette-danger">
	    		<span class="text-left-top">Danger</span>
	    		<span class="text-right-bottom">#43BC60</span>
	    	</div>
	    	<div class="palette-danger-dark">
	    		<span class="text-left">D-Dark</span>
	    		<span class="text-right">#43BC60</span>
	    	</div>
	    	<div class="palette-danger-light">
	    		<span class="text-left">D-Light</span>
	    		<span class="text-right">#43BC60</span>
	    	</div>
	    </div>
	  </div>
	  <div class="cd-md-8">
	    <div class="color-palette">
	    	<div class="palette-warning">
	    		<span class="text-left-top">Warning</span>
	    		<span class="text-right-bottom">#43BC60</span>
	    	</div>
	    	<div class="palette-warning-dark">
	    		<span class="text-left">W-Dark</span>
	    		<span class="text-right">#43BC60</span>
	    	</div>
	    	<div class="palette-warning-light">
	    		<span class="text-left">W-Light</span>
	    		<span class="text-right">#43BC60</span>
	    	</div>
	    </div>
	  </div>
	  <div class="cd-md-8">
	   <div class="color-palette">
	    	<div class="palette-success">
	    		<span class="text-left-top">Success</span>
	    		<span class="text-right-bottom">#43BC60</span>
	    	</div>
	    	<div class="palette-success-dark">
	    		<span class="text-left">S-Dark</span>
	    		<span class="text-right">#43BC60</span>
	    	</div>
	    	<div class="palette-success-light">
	    		<span class="text-left">S-Light</span>
	    		<span class="text-right">#43BC60</span>
	    	</div>
	    </div>
	  </div>
	  <div class="cd-md-8">
	   <div class="color-palette">
	    	<div class="palette-background">
	    		<span class="text-left-top">Background</span>
	    		<span class="text-right-bottom">#43BC60</span>
	    	</div>
	    	<div class="palette-background-dark">
	    		<span class="text-left">B-Dark</span>
	    		<span class="text-right">#43BC60</span>
	    	</div>
	    	<div class="palette-background-light">
	    		<span class="text-left">B-Light</span>
	    		<span class="text-right">#43BC60</span>
	    	</div>
	    </div>
	  </div>
	</div>

  </div>
</template>

<style lang="less">
@import '../../assets/less/variables.less';
@import '../../assets/less/mixins.less';

.color-palette {
	position: relative;
	margin: 0 16px 24px 0px;
	height: 160px;
	font-size: 14px;
	color: white;
	border-radius: 4px;
	.text-left-top {
		position: absolute;
		top: 16px;
		left: 16px;
	}
	.text-right-bottom {
		position: absolute;
		bottom: 96px;
		right: 16px;
	}
	.text-left {
		display: inline-block;
		padding: 13px 0 0 16px;
	}
	.text-right {
		float: right;
		display: inline-block;
		padding: 13px 16px 0 0;
	}
}
.palette-primary {
	height: 80px;
	background: @site-primary;
	border-radius: 4px 4px 0 0;
}

.palette-primary-dark {
	.palette-dark(@site-primary);
}

.palette-primary-light {
	.palette-light(@site-primary);
}

.palette-info {
	height: 80px;
	background: @site-info;
	border-radius: 4px 4px 0 0;
}

.palette-info-dark {
	.palette-dark(@site-info);
}

.palette-info-light {
	.palette-light(@site-info);
}

.palette-danger {
	height: 80px;
	background: @site-danger;
	border-radius: 4px 4px 0 0;
}

.palette-danger-dark {
	.palette-dark(@site-danger);
}

.palette-danger-light {
	.palette-light(@site-danger);
}

.palette-warning {
	height: 80px;
	background: @site-warning;
	border-radius: 4px 4px 0 0;
}

.palette-warning-dark {
	.palette-dark(@site-warning);
}

.palette-warning-light {
	.palette-light(@site-warning);
}

.palette-success {
	height: 80px;
	background: @site-success;
	border-radius: 4px 4px 0 0;
}

.palette-success-dark {
	.palette-dark(@site-success);
}

.palette-success-light {
	.palette-light(@site-success);
}

.palette-background {
	color: @site-gray-dark;
	height: 80px;
	background: @site-bg;
	border-radius: 4px 4px 0 0;
}

.palette-background-dark {
	color: @site-gray-dark;
	.palette-dark(@site-bg);
}

.palette-background-light {
	.palette-light(@site-bg);
	color: @site-gray-dark;
}

.palette-dark(@color) {
	height: 40px;
	background: darken(@color, 10%);
}

.palette-light(@color) {
	color: @color;
	height: 40px;
	border-radius: 0 0 4px 4px;
	background: fade(@color, 20%);
}

</style>
