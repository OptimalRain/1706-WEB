<!--  -->
<template>
    <div class="wrap">
        <header>
            <router-link tag='span' to='/main/home/attention'>关注</router-link>
            <router-link tag='span' to='/main/home/recommend'>推荐</router-link>
            <router-link tag='span' to='/main/home/hot'>热榜</router-link>
        </header>
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>

<style lang='scss' scoped>
.wrap{
    height: 100%;
    display: flex;
    flex-direction: column;
    &>div{
        flex:1;
        overflow: auto;
    }
}
header{
    height: 1rem;
    font-size: .32rem;
    border-bottom: 1px solid #ccc;
    box-sizing: border-box;
    display: flex;
    text-align: center;
    &>a{
        flex:1;
    }
    span{
        height: 100%;
        width: 20%;
        text-align: center;
        line-height: 1rem;
    }
    span.router-link-active{
        color: darkorchid;
    }
}
</style>
