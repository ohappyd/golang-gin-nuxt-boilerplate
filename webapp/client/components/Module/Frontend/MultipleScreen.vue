
<template>
<div class="object-laptop opacity-9">
    <div class="screen">
        <div class="lcd">
            <img class="device-content"
                style="height: 100%; width: 100%"
                src="/img/screen/1.png">
            </img>
        </div>
        <div class="gloss" />
        <div class="reflexion" />
        <div class="highlight one" />
        <div class="highlight two" />
    </div>
    <div class="keyboard one" />
    <div class="keyboard two" />

</div>
</template>
<script>

export default {
  props: { smartphone: { type: Boolean } }

}

</script>


<style lang="scss" scoped>
.object-laptop {
  position: relative;
  width: 100%;
}
.object-laptop > .screen {
  position: relative;
  width: 80%;
  margin: 0 auto;
  border: 1px solid rgba(0, 0, 0, 0.5);
  box-shadow: 0 0 0 3px #bbbbbb, inset 0 0 100px 0 rgba(164, 161, 161, 0.75);
  background-color: #ffffff;
  border-radius: 7px 7px 0 0;
}
.object-laptop > .screen::before {
  display: block;
  position: relative;
  content: "";
  padding-top: 62.5%;
}
.object-laptop > .screen > .lcd {
  position: absolute;
  top: 3.5%;
  left: 2.5%;
  bottom: 3.5%;
  right: 2.5%;
  overflow: hidden;
  border: 1px solid;
  border-color: #9b9999 #9b9999 #9b9999 #7d7979;
  border-radius: 3px;
  background-color: #9f9d9d;
  box-shadow: inset 0 0 200px 2px rgba(255, 255, 255, 0.05);
}
.object-laptop > .screen > .gloss {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 7px 0 0 0;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.175) 0%,
    rgba(255, 255, 255, 0) 50%
  );
}
.object-laptop > .screen > .reflexion {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 7px 0 0 0;
  background: linear-gradient(
    100deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(255, 255, 255, 0.05) 0.1%,
    rgba(255, 255, 255, 0.15) 33%,
    rgba(0, 0, 0, 0) 33.1%
  );
}
.object-laptop > .screen > .highlight {
  position: absolute;
  border-radius: 7px;
}
.object-laptop > .screen > .highlight.one {
  top: -4px;
  left: 2%;
  width: 80%;
  height: 2px;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.5) 15%,
    rgba(0, 0, 0, 0) 100%
  );
}
.object-laptop > .screen > .highlight.two {
  top: 2%;
  left: -4px;
  width: 2px;
  height: 80%;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.25) 15%,
    rgba(0, 0, 0, 0) 100%
  );
}
.object-laptop > .keyboard {
  position: relative;
  width: 100%;
}
.object-laptop > .keyboard.one {
  height: 0.25vw;
  border-radius: 1px 1px 0 0;
  background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.5) 0%,
      rgba(145, 141, 141, 0.75) 2%,
      rgba(0, 0, 0, 0.33) 7%,
      rgba(0, 0, 0, 0) 100%
    ),
    linear-gradient(
      90deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.33) 93%,
      rgba(115, 111, 111, 0.75) 98%,
      rgba(255, 255, 255, 0.5) 100%
    ),
    linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 20%,
      rgba(255, 255, 255, 0.35) 33%,
      rgba(255, 255, 255, 0.35) 35%,
      rgba(0, 0, 0, 0) 100%
    ),
    linear-gradient(0deg, #c4c4c4 0%, #aeaeae 100%);
}
.object-laptop > .keyboard.one::after {
  display: inline-block;
  content: "";
  position: absolute;
  top: 0;
  left: 50%;
  -webkit-transform: translate(-50%, 0);
  transform: translate(-50%, 0);
  width: 10%;
  height: 0.25vw;
  background: linear-gradient(
    90deg,
    #f4f4f4 0%,
    rgba(0, 0, 0, 0.5) 12%,
    rgba(0, 0, 0, 0.5) 90%,
    #8a8a8a 100%
  );
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2);
}
.object-laptop > .keyboard.two {
  height: 1.25vw;
  border-radius: 0 0 33% 33%;
  background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.35) 0%,
      rgba(117, 115, 115, 0.75) 2%,
      rgba(0, 0, 0, 0.5) 7%,
      rgba(0, 0, 0, 0) 50%
    ),
    linear-gradient(
      90deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(119, 118, 118, 0.5) 83%,
      rgba(115, 112, 112, 0.75) 98%,
      rgba(81, 78, 78, 0.35) 100%
    ),
    linear-gradient(
      0deg,
      rgba(101, 106, 106, 0.75) 0%,
      rgba(140, 139, 139, 0.25) 33%,
      #ffffff 34%,
      #d2d2d2 100%
    ),
    #bbbbbb linear-gradient(0deg, #c8c8c8 0%, #c8c8c8 100%);
}
.object-laptop > .keyboard.two::after {
  display: inline-block;
  content: "";
  position: absolute;
  top: 0;
  left: 50%;
  -webkit-transform: translate(-50%, 0);
  transform: translate(-50%, 0);
  width: 10%;
  height: 0.5vw;
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 0.75) 0%,
    rgba(0, 0, 0, 0.5) 100%
  );
  box-shadow: inset 0 -1px 3px 1px rgba(0, 0, 0, 0.2);
  border-radius: 0 0 0.5vw 0.5vw;
}

</style>

<style lang="scss" scoped>
$device-silver: #e2e3e4;
$device-silver-dark: darken($device-silver, 10%);
$device-silver-panel: #222;

.device-iphone-x {
  height: 868px;
  width: 428px;

  .device-frame {
    background: $device-silver-panel;
    border-radius: 68px;
    box-shadow: inset 0 0 2px 2px $device-silver-dark,
      inset 0 0 0 7px $device-silver;
    height: 868px;
    padding: 28px;
    width: 428px;
  }

  // 2436-by-1125-pixel resolution
  .device-content {
    border-radius: 40px;
    height: 812px;
    width: 375px;
  }

  .device-stripe {
    &::after,
    &::before {
      border: solid rgba(#333, 0.25);
      border-width: 0 7px;
      content: "";
      height: 7px;
      left: 0;
      position: absolute;
      width: 100%;
      z-index: 9;
    }
    &::after {
      top: 85px;
    }
    &::before {
      bottom: 85px;
    }
  }

  .device-header {
    background: $device-silver-panel;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    height: 30px;
    left: 50%;
    margin-left: -102px;
    position: absolute;
    top: 28px;
    width: 204px;

    &::after,
    &::before {
      content: "";
      height: 10px;
      position: absolute;
      top: 0;
      width: 10px;
    }
    &::after {
      background: radial-gradient(
        circle at bottom left,
        transparent 0,
        transparent 75%,
        $device-silver-panel 75%,
        $device-silver-panel 100%
      );
      left: -10px;
    }
    &::before {
      background: radial-gradient(
        circle at bottom right,
        transparent 0,
        transparent 75%,
        $device-silver-panel 75%,
        $device-silver-panel 100%
      );
      right: -10px;
    }
  }

  .device-sensors {
    &::after,
    &::before {
      content: "";
      position: absolute;
    }
    &::after {
      background: #444;
      border-radius: 3px;
      height: 6px;
      left: 50%;
      margin-left: -25px;
      top: 32px;
      width: 50px;
    }
    &::before {
      background: #444;
      border-radius: 50%;
      height: 14px;
      left: 50%;
      margin-left: 40px;
      top: 28px;
      width: 14px;
    }
  }

  .device-btns {
    background: $device-silver-dark;
    height: 32px;
    left: -3px;
    position: absolute;
    top: 115px;
    width: 3px;

    &::after,
    &::before {
      background: $device-silver-dark;
      content: "";
      height: 62px;
      left: 0;
      position: absolute;
      width: 3px;
    }

    &::after {
      top: 60px;
    }
    &::before {
      top: 140px;
    }
  }

  .device-power {
    background: $device-silver-dark;
    height: 100px;
    right: -3px;
    position: absolute;
    top: 200px;
    width: 3px;
  }
}

</style>


