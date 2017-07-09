<template>
<div id="loader">
  <div class="loader-container">
    <!-- By Sam Herbert (@sherb), for everyone. More @ http://goo.gl/7AJzbL -->
    <svg width="88" height="88" viewBox="0 0 88 88" xmlns="http://www.w3.org/2000/svg" stroke="#fff">
        <g fill="none" fill-rule="evenodd" transform="translate(1 1)" stroke-width="2">
            <circle cx="22" cy="22" r="6" stroke-opacity="0">
                <animate attributeName="r"
                    begin="1.5s" dur="3s"
                    values="6;22"
                    calcMode="linear"
                    repeatCount="indefinite" />
                <animate attributeName="stroke-opacity"
                    begin="1.5s" dur="3s"
                    values="1;0" calcMode="linear"
                    repeatCount="indefinite" />
                <animate attributeName="stroke-width"
                    begin="1.5s" dur="3s"
                    values="2;0" calcMode="linear"
                    repeatCount="indefinite" />
            </circle>
            <circle cx="22" cy="22" r="6" stroke-opacity="0">
                <animate attributeName="r"
                    begin="3s" dur="3s"
                    values="6;22"
                    calcMode="linear"
                    repeatCount="indefinite" />
                <animate attributeName="stroke-opacity"
                    begin="3s" dur="3s"
                    values="1;0" calcMode="linear"
                    repeatCount="indefinite" />
                <animate attributeName="stroke-width"
                    begin="3s" dur="3s"
                    values="2;0" calcMode="linear"
                    repeatCount="indefinite" />
            </circle>
            <circle cx="22" cy="22" r="8">
                <animate attributeName="r"
                    begin="0s" dur="1.5s"
                    values="6;1;2;3;4;5;6"
                    calcMode="linear"
                    repeatCount="indefinite" />
            </circle>
        </g>
    </svg>
  </div>
</div>
</template>

<style lang="scss">
@import '../base-styles/vars';

#loader {
  text-align: center;
  background: rgba(4,4,4,.1);
  z-index: 2;
  height: 100vh;
  position: relative;
}
.loader-container {
  position: absolute;
  left: 0;
  right: 0;
  top: calc(50% - 48px);
  height: 48px;
  & > svg  {
    stroke: $loader-color;
  }
  & > svg g {
    transform: scale(2);
  }
}
</style>