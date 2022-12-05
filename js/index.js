// 监控区域
; (function () {
    $('.monitor .tabs').on('click', 'a', function () {
        $(this)
            .addClass('active')
            .siblings('a')
            .removeClass('active')
        $('.monitor .content')
            .eq($(this).index())
            .show()
            .siblings('.content')
            .hide()
    })
    // 克隆
    $('.marquee-view .marquee').each(function () {
        var clone = $(this)
            .children()
            .clone()
        $(this).append(clone)
    })
}())
    // 点位
    ; (function () {
        // 1.实例对象
        var myChart = echarts.init(document.querySelector('.pie'))
        // 2.设置数据
        option = {
            color: ['#106cff', '#60cda0', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff'],
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)'
            },

            series: [
                {
                    name: "面积模式",
                    type: 'pie',
                    // radius设置内外圆的半径 百分比必须加引号 
                    radius: ['10%', '70%'],
                    // 设置图标的位置
                    center: ['50%', '50%'],
                    // 显示模式 area面积区域 radius 半径长度
                    roseType: "radius",
                    itemStyle: {
                        borderRadius: 5
                    },
                    // 修饰文字label
                    label: {
                        // 不加单位
                        fontSize: 10,
                        // rotate: 10,
                    },
                    // 修改引导线
                    labelLine: {
                        length: 6,
                        length2: 8,
                    },
                    data: [
                        { value: 20, name: '云南' },
                        { value: 26, name: '北京' },
                        { value: 24, name: '山东' },
                        { value: 25, name: '河北' },
                        { value: 20, name: '江苏' },
                        { value: 25, name: '浙江' },
                        { value: 30, name: '四川' },
                        { value: 42, name: '湖北' }
                    ]
                }
            ]
        };
        // 3.设置option
        myChart.setOption(option)
        // 4.让图表随浏览器缩放而缩放
        window.addEventListener('resize', function () {
            myChart.resize()
        })
    }())
    //柱形图模块
    ; (function () {
        var item = {
            name: '',
            value: '1200',
            itemStyle: {
                color: '#254065'
            },
            // 鼠标放在柱子上的颜色 设置与柱子同色 就不会高亮
            emphasis: {
                itemStyle: {
                    color: '#254065'
                }
            },
            // 工具提示框隐藏
            tooltip: {
                extraCssText: 'opacity:0'
            },
        }
        //    1.创建对象
        var myChart = echarts.init(document.querySelector('.bar'))
        // 2.设置数据
        option = {
            color: new echarts.graphic.LinearGradient(
                // (x1,y2) 点到点 (x2,y2) 之间进行渐变
                0, 0, 0, 1,
                [
                    { offset: 0, color: '#00fffb' }, // 0 起始颜色
                    { offset: 1, color: '#0061ce' }  // 1 结束颜色
                ]
            ),
            tooltip: {
                trigger: 'item',
            },
            grid: {
                left: '0%',
                right: '3%',
                bottom: '3%',
                top: '3%',
                containLabel: true,
                // 显示图表网格
                show: true,
                // 网格边框颜色
                borderColor: 'rgba(0, 240, 255, 0.3)',
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['上海', '广州', '北京', '深圳', '合肥', '', '......', '', '杭州', '厦门', '济南', '成都', '重庆'],
                    axisTick: {
                        // 柱子在刻度线的位置 
                        // false柱子在刻度之间 true柱子在刻度中间
                        alignWithLabel: false,
                        // 刻度是否显示
                        show: false
                    },
                    axisLabel: {
                        fontSize:'12px',
                            color: '#4c9bfd'
                    },
                    // 设置X轴的颜色
                    axisLine: {
                        lineStyle: {
                            color: 'rgba(0, 240, 255, 0.3)',
                        }
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    axisTick: {
                        // 柱子在刻度线的位置 
                        // false柱子在刻度之间 true柱子在刻度中间
                        alignWithLabel: false,
                        // 刻度是否显示
                        show: false
                    },
                    axisLabel: {
                        color: '#4c9bfd'
                    },
                    // 设置X轴的颜色
                    axisLine: {
                        lineStyle: {
                            color: 'rgba(0, 240, 255, 0.3)',
                        }
                    },
                    // 设置y轴分割线的颜色
                    splitLine: {
                        lineStyle: {
                            color: 'rgba(0, 240, 255, 0.3)',
                        }
                    },
                }
            ],
            series: [
                {
                    name: '用户统计',
                    type: 'bar',
                    barWidth: '60%',
                    data: [2100, 1900, 1700, 1560, 1400, item, item, item, 900, 750, 600, 480, 240]
                }
            ]
        };
        // 3.把数据设置给option
        myChart.setOption(option)
        // 让图表随浏览器缩放而缩放
        window.addEventListener('resize', function () {
            myChart.resize()
        })
    }())
    // 订单统计
    ; (function () {
        $('.filter').on('click', 'a', function () {
            $(this)
                .addClass('active')
                .siblings('a')
                .removeClass('active')
            console.log($(this).index());
            $('.box .data')
                .eq($(this).index())
                .show()
                .siblings('.data')
                .hide()

        })
        // 让图表随浏览器缩放而缩放
        window.addEventListener('resize', function () {
            myChart.resize()
        })
    }())
    // 销售统计模块
    ; (function () {
        // 数据
        var data = {
            year: [
                [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
                [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
            ],
            quarter: [
                [23, 75, 12, 97, 21, 67, 98, 21, 43, 64, 76, 38],
                [43, 31, 65, 23, 78, 21, 82, 64, 43, 60, 19, 34]
            ],
            month: [
                [34, 87, 32, 76, 98, 12, 32, 87, 39, 36, 29, 36],
                [56, 43, 98, 21, 56, 87, 43, 12, 43, 54, 12, 98]
            ],
            week: [
                [43, 73, 62, 54, 91, 54, 84, 43, 86, 43, 54, 53],
                [32, 54, 34, 87, 32, 45, 62, 68, 93, 54, 54, 24]
            ]
        }
        // 1.创建对象
        var myChart = echarts.init(document.querySelector('.line'))
        // 2.配置option
        var option = {
            color: ['#00f2f1', '#ed3f35'],
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                // 距离容器右侧10%
                right: "10%",
                // 设置文本颜色
                textStyle: {
                    color: '#4c9bfd'
                },
                data: ['预期销售额', '实际销售额']
            },
            grid: {
                top: "20%",
                left: '3%',
                right: '4%',
                bottom: '3%',
                show: true,
                borderColor: '#012f4a',
                containLabel: true
            },
            xAxis: {
                type: "category",
                boundaryGap: false,
                data: [
                    "1月",
                    "2月",
                    "3月",
                    "4月",
                    "5月",
                    "6月",
                    "7月",
                    "8月",
                    "9月",
                    "10月",
                    "11月",
                    "12月"
                ],
                // 去除刻度
                axisTick: {
                    show: false
                },
                // 修饰刻度标签的颜色
                axisLabel: {
                    color: "#4c9bfd"
                },
                // 去除x坐标轴的颜色
                axisLine: {
                    show: false
                }
            },
            yAxis: {
                type: 'value',
                // 去除刻度
                axisTick: {
                    show: false
                },
                axisLabel: {
                    color: '#4c9bfd'
                },
                // 修改y轴分割线颜色`
                splitLine: {
                    lineStyle: {
                        color: '#012f4a'
                    }
                }
            },
            series: [{
                name: '预期销售额',
                data: data.year[0],
                type: 'line',
                stack: '总量',
                // 折线修饰为圆滑
                smooth: true,
            }, {
                name: '实际销售额',
                data: data.year[1],
                type: 'line',
                stack: '总量',
                smooth: true,
            }]
        };
        // 3.实例化对象
        myChart.setOption(option)
        // 4.tab栏切换
        $('.sales .caption').on('click', 'a', function () {
            // 当点击a时,当前a的索引赋值给i
            i = $(this).index() - 1
            $(this)
                .addClass('active')
                .siblings('a')
                .removeClass('active')
            var arr = data[this.dataset.type]
            option.series[0].data = arr[0]
            option.series[1].data = arr[1]
            // 把重新赋值的option给实例对象
            myChart.setOption(option)
        })
        var i = 0
        var timer = setInterval(function () {
            i++
            if (i >= 4) {
                i = 0
            }
            $('.sales .caption a').eq(i).click()
        }, 1000)
        $('.sales').hover(
            function () {
                clearInterval(timer)
            },
            function () {
                // 开启前再清一次
                clearInterval(timer)
                timer = setInterval(function () {
                    i++
                    if (i >= 4) {
                        i = 0
                    }
                    $('.sales .caption a').eq(i).click()
                }, 1000)
            })
        // 让图表随浏览器缩放而缩放
        window.addEventListener('resize', function () {
            myChart.resize()
        })
    }())
    //销售模块 雷达图模块
    ; (function () {
        var myChart = echarts.init(document.querySelector('.radar'))
        //4.准备数据
        const lineStyle = {
            width: 1,
            opacity: 0.5
        };
        var option = {
            tooltip: {
                show: true,
                position: ['60%', '10%'],
            },
            radar: {
                indicator: [
                    { name: "机场", max: 100 },
                    { name: "商场", max: 100 },
                    { name: "火车站", max: 100 },
                    { name: "汽车站", max: 100 },
                    { name: "地铁", max: 100 }
                ],
                name: {
                    textStyle: {
                        color: '#4c9bfd'
                    }
                },
                // 雷达最大半径
                radius: '55%',
                // 图片位置
                // center: "50% 50%",
                shape: 'circle',
                // 修改雷达圆圈个数
                splitNumber: 4,
                axisName: {
                    color: 'rgb(238, 197, 102)'
                },
                // 圆圈颜色 从内到外
                splitLine: {
                    lineStyle: {
                        color: [
                            'rgba(255, 255, 255, 0.5)',
                        ]
                    }
                },
                splitArea: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: 'rgba(238, 197, 102, 0.5)'
                    }
                },

            },
            series: [
                {
                    name: '北京',
                    type: 'radar',
                    lineStyle: {
                        normal: {
                            color: '#fff',
                            width: 1,
                            opacity: 0.5,
                        }
                    },
                    data: [[90, 19, 56, 11, 34]],
                    symbol: 'none',
                    itemStyle: {
                        color: '#F9713C'
                    },
                    areaStyle: {
                        color: 'rgba(238, 197, 102, 0.6)',
                    },
                    // 设置雷达小圆点
                    symbol: 'circle',
                    // 设置雷达的尺寸大小
                    symbolSize: 5,
                    // 设置雷达的颜色
                    itemStyle: {
                        color: '#fff'
                    },
                    label: {
                        show: true,
                        fontSize: 8
                    },
                }
            ]
        };
        // 5.设置option
        myChart.setOption(option)
        // 让图表随浏览器缩放而缩放
        window.addEventListener('resize', function () {
            myChart.resize()
        })
    }())
    //销售模块 饼形图模块
    ; (function () {
        var myChart = echarts.init(document.querySelector('.gauge'))
        var option = {
            series: [
                {
                    type: 'pie',
                    // 修改饼图的内外半径
                    radius: ["130%", "150%"],
                    // 修改并图的位置
                    center: ['48%', '80%'],
                    avoidLabelOverlap: false,
                    labelLine: {
                        show: false
                    },
                    hoverOffset: 0,
                    // 起始角度
                    startAngle: 180,
                    data: [
                        {
                            value: 150, itemStyle: {
                                // 颜色渐变#00c9e0->#005fc1
                                color: new echarts.graphic.LinearGradient(
                                    // (x1,y2) 点到点 (x2,y2) 之间进行渐变
                                    0,
                                    0,
                                    0,
                                    1,
                                    [
                                        { offset: 0, color: "#00c9e0" }, // 0 起始颜色
                                        { offset: 1, color: "#005fc1" } // 1 结束颜色
                                    ]
                                )
                            }
                        },
                        { value: 50, itemStyle: { color: '#12274d' } },
                        {
                            value: 200,
                            itemStyle: {
                                color: 'transparent'
                            }
                        }
                    ]
                }
            ]
        };
        myChart.setOption(option)
        // 让图表随浏览器缩放而缩放
        window.addEventListener('resize', function () {
            myChart.resize()
        })
    }())
    // 热门商品模块 
    ; (function () {
        // 1.导入数据
        var hotData = [
            {
                city: '北京',  // 城市
                sales: '25, 180',  // 销售额
                flag: true, //  上升还是下降
                brands: [   //  品牌种类数据
                    { name: '可爱多', num: '9,086', flag: true },
                    { name: '娃哈哈', num: '8,341', flag: true },
                    { name: '喜之郎', num: '7,407', flag: false },
                    { name: '八喜', num: '6,080', flag: false },
                    { name: '小洋人', num: '6,724', flag: false },
                    { name: '好多鱼', num: '2,170', flag: true },
                ]
            },
            {
                city: '河北',
                sales: '23,252',
                flag: false,
                brands: [
                    { name: '可爱多', num: '3,457', flag: false },
                    { name: '娃哈哈', num: '2,124', flag: true },
                    { name: '喜之郎', num: '8,907', flag: false },
                    { name: '八喜', num: '6,080', flag: true },
                    { name: '小洋人', num: '1,724', flag: false },
                    { name: '好多鱼', num: '1,170', flag: false },
                ]
            },
            {
                city: '上海',
                sales: '20,760',
                flag: true,
                brands: [
                    { name: '可爱多', num: '2,345', flag: true },
                    { name: '娃哈哈', num: '7,109', flag: true },
                    { name: '喜之郎', num: '3,701', flag: false },
                    { name: '八喜', num: '6,080', flag: false },
                    { name: '小洋人', num: '2,724', flag: false },
                    { name: '好多鱼', num: '2,998', flag: true },
                ]
            },
            {
                city: '江苏',
                sales: '23,252',
                flag: false,
                brands: [
                    { name: '可爱多', num: '2,156', flag: false },
                    { name: '娃哈哈', num: '2,456', flag: true },
                    { name: '喜之郎', num: '9,737', flag: true },
                    { name: '八喜', num: '2,080', flag: true },
                    { name: '小洋人', num: '8,724', flag: true },
                    { name: '好多鱼', num: '1,770', flag: false },
                ]
            },
            {
                city: '山东',
                sales: '20,760',
                flag: true,
                brands: [
                    { name: '可爱多', num: '9,567', flag: true },
                    { name: '娃哈哈', num: '2,345', flag: false },
                    { name: '喜之郎', num: '9,037', flag: false },
                    { name: '八喜', num: '1,080', flag: true },
                    { name: '小洋人', num: '4,724', flag: false },
                    { name: '好多鱼', num: '9,999', flag: true },
                ]
            }
        ]
        // 2.遍历渲染数据
        var supHTML = ''
        $.each(hotData, function (index, item) {
            supHTML += ` <li>
            <span>${item.city}</span>
            <span>${item.sales} <s class=${item.flag ? "icon-up" : "icon-down"}></s></span>
        </li>`
        })
        $('.sup').html(supHTML)
        // 鼠标经过li高亮
        $('.province .sup').on('mouseenter', 'li', function () {
            index = $(this).index()
            render($(this))
        })
        // 渲染高亮 和渲染对应数据
        function render(that) {
            that
                .addClass('active')
                .siblings('li')
                .removeClass('active')
            console.log(hotData[that.index()].brands);
            var subHTML = ''
            $.each(hotData[that.index()].brands, function (index, item) {
                subHTML += `<li><span>${item.name}</span><span> <s class="${item.flag ? "icon-up" : "icon-down"}"></s>${item.num}</span></li>`
            })
            $('.sub').html(subHTML)
        }

        // 默认第一个li高亮
        var lis = $('.province .sup li')
        lis.eq(0).mouseenter()
        var index = 0
        var timer = setInterval(function () {
            index++
            if (index >= 5) index = 0
            // 渲染
            render(lis.eq(index))
        }, 1000)
        // 鼠标经过sup清楚计时器
        $('.province .sup').hover(
            function () {
                clearInterval(timer)
            },
            function () {
                clearInterval(timer)
                timer = setInterval(function () {
                    index++
                    if (index >= 5) index = 0
                    // 调用渲染
                    render(lis.eq(index))
                }, 1000)
            }
        )
    }())