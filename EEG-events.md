# EEG事件记录表

## EEG-GB

| 信号/分组 | 分组信号 | 时间偏差                 | 描述                                      |
| --------- | -------- | ------------------------ | ----------------------------------------- |
| 250       |          |                          | welcome欢迎                               |
| 1         |          |                          | Relaxt5分钟提示                           |
| 230       |          | 5mins                    | Relax 5分钟                               |
| 231       |          |                          | Beep                                      |
| 232       |          |                          |                                           |
| 20        |          |                          | PracticeHints，练习                       |
| 21        |          |                          | +                                         |
| (1)       | 22       |                          | PracticeTextOption                        |
| (1)       | 24       |                          | PracticeFeedBackText                      |
| (2)       | 26       |                          | PracticePicOption                         |
| (2)       | 28       |                          | PracticeFeedBackText                      |
| 150       |          |                          | TestHintsBF实验前提示，开始第一阶段的实验 |
| (1)       | 154      | 300                      | +                                         |
| (1)       | 156      | 200                      | PicTrigger(图片启动图片)                  |
| (1)       | 158      | 100                      | TextBlank                                 |
| (1)       | 160      | 3000 or feedback         | Feedback on Pic                           |
| (1)       | 163      | wait until answer        | 评价Feedback                              |
| (1)       | 220      | 200-400                  | 随机空白                                  |
| (2)       | 154      | 300                      | +                                         |
| (2)       | 156      | 200                      | PicTrigger(图片启动文字)                  |
| (2)       | 158      | 100                      | TextBlank                                 |
| (2)       | 180      | 3000 or feedback         | Feedback on Text                          |
| (2)       | 163      | wait until answer        | 评价Feedback                              |
| (2)       | 220      | 200-400                  | 随机空白                                  |
| (3)       | 154      | 300                      | +                                         |
| (3)       | 196      | 200                      | TextTrigger(文字启动图片)                 |
| (3)       | 158      | 100                      | TextBlank                                 |
| (3)       | 160      | 3000 or feedback         | Feedback on Pic                           |
| (3)       | 163      | wait until answer        | 评价Feedback                              |
| (3)       | 220      | 200-400                  | 随机空白                                  |
| (4)       | 154      | 300                      | +                                         |
| (4)       | 196      | 200                      | TextTrigger(文字启动文字)                 |
| (4)       | 158      | 100                      | TextBlank                                 |
| (4)       | 180      | 3000 or feedback         | Feedback on Text                          |
| (4)       | 163      | wait until answer        | 评价Feedback                              |
| (4)       | 220      | 200-400                  | 随机空白                                  |
| 200       |          | 30000                    | 小憩                                      |
| 151       |          | wait until pressed a key | 等待确认进入冥想或放松练习                |
| （1）     | 3        |                          | 放松提示                                  |
| （1）     | 4        | 26mins                   | 放松练习                                  |
| （2）     | 5        |                          | 冥想提示                                  |
| （2）     | 6        | 26mins                   | 冥想练习                                  |
| 233       |          |                          | 结束冥想/放松                             |
| 11        |          | 1sec                     | Beep                                      |
| 234       |          |                          | End Beep                                  |
| 50        |          | wait until pressed a key | 开始第二阶段的实验                        |
| (1)       | 54       | 300                      | +                                         |
| (1)       | 56       | 200                      | PicTrigger(图片启动图片)                  |
| (1)       | 58       | 100                      | TextBlank                                 |
| (1)       | 60       | 3000 or feedback         | Feedback on Pic                           |
| (1)       | 63       | wait until answer        | 评价Feedback                              |
| (1)       | 220      | 200-400                  | 随机空白                                  |
| (2)       | 54       | 300                      | +                                         |
| (2)       | 56       | 200                      | PicTrigger(图片启动文字)                  |
| (2)       | 58       | 100                      | TextBlank                                 |
| (2)       | 80       | 3000 or feedback         | Feedback on Text                          |
| (2)       | 63       | wait until answer        | 评价Feedback                              |
| (2)       | 220      | 200-400                  | 随机空白                                  |
| (3)       | 54       | 300                      | +                                         |
| (3)       | 96       | 200                      | TextTrigger(文字启动图片)                 |
| (3)       | 58       | 100                      | TextBlank                                 |
| (3)       | 60       | 3000 or feedback         | Feedback on Pic                           |
| (3)       | 63       | wait until answer        | 评价Feedback                              |
| (3)       | 220      | 200-400                  | 随机空白                                  |
| (4)       | 54       | 300                      | +                                         |
| (4)       | 96       | 200                      | TextTrigger(文字启动文字)                 |
| (4)       | 58       | 100                      | TextBlank                                 |
| (4)       | 80       | 3000 or feedback         | Feedback on Text                          |
| (4)       | 63       | wait until answer        | 评价Feedback                              |
| (4)       | 220      | 200-400                  | 随机空白                                  |
| 201       |          | 30000                    | 小憩                                      |
| 152       |          |                          | 结束                                      |



### 数据处理过程

| 简述                             | 内容       |
| -------------------------------- | ---------- |
| gb-004的前实验有一个s196的重叠值 | 删除重叠值 |
|                                  |            |
|                                  |            |



## EEG-GXZ

| 信号/分组 | 时间           | 描述 |
| --------- | -------------- | ---- |
| （1）     | 300            | +    |
| （1）     | 1000           | 刺激 |
| （1）     | 200-400        | 随机 |
| （2）     | 300            | +    |
| （2）     | until response | 反馈 |

范围：-0.5 - 1.5

信号：

```
前：
1,2，3,4, 5, 6,
后：
7,8，9,10,11,12，
```

冥想：

```
205：提示
206：开始
210：结束
```

放松：

```
200：提示
201：开始
210：结束
```

