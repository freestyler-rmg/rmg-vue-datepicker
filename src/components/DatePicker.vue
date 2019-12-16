<template>
  <div class="vuejs-datepicker">

    <div class="datepicker-input">
      <div class="input-container">
        <input type="text" placeholder="Pick your date">
        <span class="input-ornament"></span>
        <img alt="Calendar icon" src="../assets/calendar.svg">
      </div>
    </div>

    <div class="datepicker-panel-container">
      <div class="datepicker-panel year-picker">
        <ul class="navigation">
          <li>prev</li>
          <li>2014 - 2025</li>
          <li>next</li>
        </ul>

        <ul class="list year-list">
          <li class="active">2014</li>
          <li class="disabled">2015</li>
          <li>2016</li>
          <li>2017</li>
          <li>2018</li>
          <li>2019</li>
          <li>2020</li>
          <li>2021</li>
          <li>2022</li>
          <li>2023</li>
          <li>2024</li>
          <li>2025</li>
        </ul>
      </div>

      <div class="datepicker-panel month-picker">
        <ul class="navigation">
          <li>prev</li>
          <li>2020</li>
          <li>next</li>
        </ul>

        <ul class="list month-list">
          <li>Jan</li>
          <li>Feb</li>
          <li>Mar</li>
          <li>Apr</li>
          <li>May</li>
          <li>Jun</li>
          <li>Jul</li>
          <li>Aug</li>
          <li>Sep</li>
          <li>Oct</li>
          <li>Nov</li>
          <li>Des</li>
        </ul>
      </div>

      <div class="datepicker-panel date-picker">
        <ul class="navigation">
          <li>prev</li>
          <li>January</li>
          <li>next</li>
        </ul>

        <ul class="list days-list">
          <li>Mo</li>
          <li>Tu</li>
          <li>We</li>
          <li>Th</li>
          <li>Fr</li>
          <li>Sa</li>
          <li>Su</li>
        </ul>

        <ul class="list date-list">
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
          <li>7</li>
          <li>8</li>
          <li>9</li>
          <li>10</li>
          <li>11</li>
          <li>12</li>
          <li>13</li>
          <li>14</li>
          <li>15</li>
          <li>16</li>
          <li>17</li>
          <li>18</li>
          <li>19</li>
          <li>20</li>
          <li>21</li>
          <li>22</li>
          <li>23</li>
          <li>24</li>
          <li>25</li>
          <li>26</li>
          <li>27</li>
          <li>28</li>
          <li>29</li>
          <li>30</li>
          <li>31</li>
        </ul>
      </div>
    </div>


  </div>
</template>

<script>
export default {
  name: 'DatePicker'
}
</script>

<style lang="scss">
  .vuejs-datepicker {

  }

  .datepicker-input {
    margin-bottom: 2rem;
    position: relative;
    .input-container {
      position: relative;
      width: 30rem;
    }
    .input-ornament {
      width: 100%;
      height: 1px;
      position: absolute;
      left: 0;
      bottom: 0;
      overflow-x: hidden;
      &::before {
        content: '';
        width: 200%;
        height: 1px;
        background: linear-gradient(to right, #333, #333 50%, #ccc 50%, #ccc);
        position: absolute;
        left: 0;
        bottom: 0;
        transform: translateX(-50%);
        transition: transform .15s ease-out;
      }
    }
    input[type='text'] {
      width: 100%;
      padding: .5rem;
      padding-right: 3rem;
      &:focus,
      &.filled {
        & + .input-ornament::before {
          transform: translateX(0);
        }
      }
    }
    img {
      position: absolute;
      top: 50%;
      right: .3rem;
      transform: translateY(-50%);
      width: 2rem;
    }
  }

  .datepicker-panel {
    width: 22rem;
    height: auto;
    border: .1rem solid #ccc;
    padding: .4rem;
    border-radius: .5rem;
    background-color: #fff;
    ul {
      display: flex;
      align-items: flex-start;
      align-content: flex-start;
      justify-content: flex-start;
      flex-wrap: wrap;
      li {
        list-style-type: none;
        flex: 0 0 auto;
        background-color: #fff;
        height: 3rem;
        line-height: 3rem;
        border-radius: .2rem;
        &:hover {
          background-color: #eee;
          cursor: pointer;
        }
        &.active {
          color: #fff;
          background-color: #333;
        }
        &.disabled {
          color: #aaa;
          &:hover {
            background-color: #fff;
            color: #aaa;
            cursor: not-allowed;
          }
        }
      }
    }

    .navigation {
      li {
        flex: 1 0 auto;
        &:first-child,
        &:last-child {
          flex: 0 0 3rem;
          font-size: 0;
          position: relative;
          &::before {
            content: '';
            width: 1.6rem;
            height: 1.6rem;
            display: block;
            border-top: 1rem solid transparent;
            border-bottom: 1rem solid transparent;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
          }
        }
        &:first-child {
          &::before {
            border-right: 1rem solid #333;
          }
        }
        &:last-child {
          &::before {
            border-left: 1rem solid #333;
          }
        }
      }
    }

    .list {
      &.year-list,
      &.month-list {
        li {
          flex: 0 0 21/4*1rem;
          height: 4rem;
          line-height: 4rem;
        }
      }

      &.days-list {
        li {
          cursor: default;
          flex: 0 0 21/7*1rem;
          &:hover {
            background-color: inherit;
          }
        }
      }

      &.date-list {
        li {
          flex: 0 0 21/7*1rem;
        }
      }
    }
  }
</style>