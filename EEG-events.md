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
| gb-008                           | 无数据     |
|                                  |            |

### 数据处理状态

| 是否可用 | 编号   | 处理结果                                                | 备注                                              |
| -------- | ------ | ------------------------------------------------------- | ------------------------------------------------- |
| Y        | GB-001 | eeg预处理结束，eprime预处理结束，eeg/eprime记录检查结束 |                                                   |
| Y        | GB-002 | eeg预处理结束，eprime预处理结束，eeg/eprime记录检查结束 |                                                   |
| Y        | GB_003 | eeg预处理结束，eprime预处理结束                         | 无5分钟静息数据                                   |
| Y        | GB_004 | eeg预处理结束，eprime预处理结束                         | 无5分钟静息数据                                   |
| Y        | GB_005 | eeg预处理结束，eprime预处理结束                         |                                                   |
|          | GB_006 | ——，eprime预处理结束                                    | 数据不对，可能是其他人的数据。                    |
| Y        | GB_007 | eeg预处理结束，eprime预处理结束                         |                                                   |
| Y        | GB_008 | eeg预处理结束，eprime预处理结束                         |                                                   |
|          | GB_009 |                                                         | 无数据                                            |
| Y        | GB_010 | eeg预处理结束，eprime预处理结束                         |                                                   |
| Y        | GB_011 | eeg预处理结束，eprime预处理结束                         |                                                   |
| Y        | GB_012 | eeg预处理结束，eprime预处理结束                         |                                                   |
| Y        | GB_013 | eeg预处理结束，eprime预处理结束                         |                                                   |
|          | GB_014 |                                                         | 无数据                                            |
|          | GB_015 |                                                         | 无数据                                            |
| Y        | GB_016 | eeg预处理结束，eprime预处理结束                         |                                                   |
|          | GB_017 |                                                         | 无数据                                            |
| Y        | GB_018 | eeg预处理结束，eprime预处理结束                         |                                                   |
| Y        | GB_019 | eeg预处理结束，eprime预处理结束                         |                                                   |
| Y        | GB_020 | eeg预处理结束，eprime预处理结束                         |                                                   |
| Y        | GB_021 | eeg预处理结束，eprime预处理结束                         |                                                   |
|          | GB_022 | eeg预处理结束，eprime预处理结束，eeg/eprime记录检查结束 | eeg/eprime记录检查不匹配：2112vs2289              |
|          | GB_023 |                                                         | 数据不全：没有eprime数据；下载数据中              |
|          | GB_024 | eeg预处理**失败**，eprime预处理结束                     | eeg计划处理中，只有后半段数据，前半段没有marker； |
|          | GB_025 | eeg预处理结束，eprime预处理结束                         |                                                   |
|          | GB_026 | eeg预处理结束，eprime预处理结束                         |                                                   |
|          | GB_027 | ，eprime预处理结束                                      | 处理中                                            |
|          | GB_028 | eeg预处理结束，ePrime数据不匹配                         | ePrime数据不对                                    |
|          | GB_029 | ，eprime预处理结束                                      |                                                   |
|          | GB_030 |                                                         |                                                   |
|          | GB_031 | ，eprime预处理结束                                      |                                                   |
|          |        |                                                         |                                                   |


### 行为数据过程

| 行为      | 过程分析                                                     | 注释 |
| --------- | ------------------------------------------------------------ | ---- |
| 图片2图片 | Procedure[Block]:Pic2PicBF<br/>Running[Block]:TestTaskBF<br/><br/>TestAddMark1.OffsetTime:461813<br/>TestAddMark1.OnsetDelay:25<br/>TestAddMark1.OnsetTime:461513<br/><br/>TextBlank1.OffsetTime:462147<br/>TextBlank1.OnsetDelay:17<br/>TextBlank1.OnsetTime:462047<br/><br/>PicTrigger1.OffsetTime:462030<br/>PicTrigger1.OnsetDelay:17<br/>PicTrigger1.OnsetTime:461830<br/>TriggerPicsPosBF:16<br/>TrPics:res/pics/positive/016.png<br/><br/>FBSlide1.OffsetTime:465180<br/>FBSlide1.OnsetDelay:33<br/>FBSlide1.OnsetTime:462180<br/>FBSlide1.RESP:d<br/>FBSlide1.RT:0<br/>FBSlide1.RTTime:0<br/>PicSelect1:126<br/>TPicSel:res/pics/negative/532.png<br/><br/>FeedBack1.OffsetTime:468393<br/>FeedBack1.OnsetDelay:33<br/>FeedBack1.OnsetTime:465213<br/>FeedBack1.RESP:j<br/>FeedBack1.RT:3180<br/>FeedBack1.RTTime:468393 |      |
| 图片2文字 | Procedure[Block]:Pic2TextBF<br/>Running[Block]:  TestTaskBF<br/><br/>TestAddMark1.OffsetTime(OnsetDelay):455131(30)<br/>TestAddMark1.OnsetTime:454831<br/><br/>PicTrigger1.OffsetTime(OffsetDelay):455347(0)<br/>PicTrigger1.OnsetDelay(OnsetTime)：16(455147)<br/>TrPics: res/pics/positive/758.png<br/>TriggerPicsPosBF:29<br/><br/>TextBlank1.OffsetTime(OnsetDelay):455464(17)<br/>TextBlank1.OnsetTime:455364<br/><br/>FBTextSelect1.OnsetDelay(OnsetTime):33(455497)<br/>FBTextSelect1.RESP:d<br/>FBTextSelect1.RT:352<br/>TextSelect1:23<br/>TText:舒畅<br/><br/>FeedBack1.OnsetDelay(OnsetTime):32(455881)<br/>FeedBack1.RESP:d<br/>FeedBack1.RT:2352<br/>FeedBack1.RTTime:458233 |      |
| 文字2图片 | Procedure[Block]:Text2PicBF<br/>Running[Block]:  TestTaskBF<br/><br/>TestAddMark1.OffsetTime:458897<br/>TestAddMark1.OnsetDelay:40<br/>TestAddMark1.OnsetTime:458597<br/><br/>TextTrigger1.OffsetTime:459114<br/>TextTrigger1.OnsetDelay:17<br/>TextTrigger1.OnsetTime:458914<br/>TriggerTextNegBF:16<br/>TrText:凶狠<br/><br/>TextBlank1.OffsetTime:459230<br/>TextBlank1.OnsetDelay:16<br/>TextBlank1.OnsetTime:459130<br/><br/>PicSelect1:79<br/>TPicSel:res/pics/positive/432.png<br/>FBSlide1.OffsetTime(OnsetDelay):460473(34)<br/>FBSlide1.OnsetTime:459264<br/>FBSlide1.RESP:d<br/>FBSlide1.RT:1209<br/>FBSlide1.RTTime:460473<br/><br/>FeedBack1.OffsetTime:461161<br/>FeedBack1.OnsetDelay:41<br/>FeedBack1.OnsetTime:460514<br/>FeedBack1.RESP:d<br/>FeedBack1.RT:647<br/>FeedBack1.RTTime:461161 |      |
| 文字2文字 | Procedure[Block]:Text2TextBF<br/>Running[Block]:TestTaskBF<br/><br/>TestAddMark1.OffsetTime:468963<br/>TestAddMark1.OnsetDelay:25<br/>TestAddMark1.OnsetTime:468663<br/><br/>TextBlank1.OffsetTime:469296<br/>TextBlank1.OnsetDelay:16<br/>TextBlank1.OnsetTime:469196<br/><br/>TriggerTextPosBF:8<br/>TrText:活泼<br/>TextTrigger1.OffsetTime:469180<br/>TextTrigger1.OnsetDelay:17<br/>TextTrigger1.OnsetTime:468980<br/><br/>FBTextSelect1.OnsetDelay:34<br/>FBTextSelect1.OnsetTime:469330<br/>FBTextSelect1.RESP:d<br/>FBTextSelect1.RT:783<br/>TextSelect1:3<br/>TText:欢乐<br/><br/>FeedBack1.OffsetTime:470713<br/>FeedBack1.OnsetDelay:33<br/>FeedBack1.OnsetTime:470146<br/>FeedBack1.RESP:d<br/>FeedBack1.RT:567<br/>FeedBack1.RTTime:470713 |      |

### 数据处理流程

| 步骤                    | 简述                                                         | 备注 |
| ----------------------- | ------------------------------------------------------------ | ---- |
| EEG数据预处理           | 将EEG数据通过以下步骤：重采样、重参考、排除其他通道、高通、市电、低通滤波；ICA处理；分块（5分钟、前实验、后实验、冥想）；按事件切割；进一步切割（剔除多余的部分）；rebase；数据对齐；按事件叠加； |      |
| eprime数据预处理        | 转换eprime数据为数据信息采集表                               |      |
| eprime数据和eeg数据对齐 | 跳过，仅仅检查数据是否匹配                                   |      |
| 绘制脑电图              | 频谱图                                                       |      |





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

更正：采用后面的事件向前后各推1s。即：

```
前:
s11,s12
s21,s22
s31,s32
s41,s42
s51,s52
s61,s62
后：
s71,s72
s81,s82
s91,s92
s101,s102
s111,s112
s121,s122
```

### 数据处理状态

|      | 编号    | 处理情况                     | 备注       |
| ---- | ------- | ---------------------------- | ---------- |
|      | gxz-001 | 预处理结束,eprime预处理结束  |            |
|      | gxz-002 | 预处理结束,eprime预处理结束  |            |
|      | gxz-003 | 预处理结束,eprime预处理结束  |            |
|      | gxz_004 | 预处理结束,eprime预处理结束  |            |
|      | gxz-005 | 预处理结束,eprime预处理结束  |            |
|      | gxz-006 | 预处理结束,eprime预处理结束  |            |
|      | gxz-007 | 预处理结束,eprime预处理结束  |            |
|      | gxz-008 | 预处理结束,eprime预处理结束  |            |
|      | gxz-009 |                              | 无数据     |
|      | gxz-010 | 预处理结束,eprime预处理结束  |            |
|      | gxz-011 | 预处理结束,eprime预处理结束  |            |
|      | gxz-012 | 预处理结束,eprime预处理结束  |            |
|      | gxz-013 | 预处理结束,eprime预处理结束  |            |
|      | gxz-014 |                              |            |
|      | gxz-015 |                              |            |
|      | gxz-016 | 预处理结束,eprime预处理结束  |            |
|      | gxz-017 |                              |            |
|      | gxz-018 | 预处理结束,eprime预处理结束  |            |
|      | gxz-019 | 预处理结束,eprime预处理结束  |            |
|      | gxz-020 | 预处理结束,,eprime预处理结束 |            |
|      | gxz-021 | ,eprime预处理结束            | 计划处理中 |
|      | gxz-022 | ,eprime预处理结束            |            |
|      | gxz-023 | ,eprime预处理结束            |            |
|      | gxz-024 | ,eprime预处理结束            |            |
|      | gxz-025 | ,eprime预处理结束            |            |
|      | gxz-026 | ,eprime预处理结束            |            |
|      | gxz-027 | ,eprime预处理结束            |            |
|      | gxz-028 | ,eprime预处理结束            |            |
|      | gxz-029 | ,eprime预处理结束            |            |
|      | gxz-030 | ,eprime预处理结束            |            |
|      | gxz-031 | ,eprime预处理结束            |            |
|      |         |                              |            |


### 行为数据过程

(前半段)数据采集部分：S1（P2、P4&P5）、S2（P2、P4&P5）；

(后半段)数据采集部分：S3（P2、P4&P5）、S4（P2、P4&P5）；



开始：Blank1,Blank2,Blank3,Blank4;



|      |                                                              |      |
| ---- | ------------------------------------------------------------ | ---- |
|      | (S1、S2):有PS1,PS2<br/>Ins6.ACC:1<br/>Ins6.OnsetDelay:25<br/>Ins6.OnsetTime:4115287<br/>Ins6.OnsetToOnsetTime:0<br/>Ins6.RT:2117<br/>Ins6.RTTime:4117404<br/>Trial:1<br/>GList2:1<br/>GList2.Sample:1<br/>Procedure[Trial]:G2<br/>Running[Trial]:GList2<br/>Type0:1<br/>SubTrial:1<br/>EList2:1<br/>EList2.Sample:354<br/>EList2.Cycle:18<br/>MList2:345<br/>P1:胸骨<br/>P2:2<br/>P3:k<br/>P4:41<br/>P5:21<br/>Procedure[SubTrial]:S2<br/>PS1.ACC:0<br/>PS1.CRESP:k<br/>PS1.OnsetDelay:33<br/>PS1.OnsetTime:3426257<br/>PS1.OnsetToOnsetTime:1033<br/>PS1.RT:0<br/>PS1.RTTime:0<br/>PS3.ACC:0(与PS1互斥）<br/>PS3.CRESP:k<br/>PS3.OnsetDelay:33<br/>PS3.OnsetTime:3426257<br/>PS3.OnsetToOnsetTime:1033<br/>PS3.RT:0<br/>PS3.RTTime:0<br/>PS2.ACC:1<br/>PS2.RESP:f<br/>PS2.RT:734<br/>（S3、S4):有PS3,PS4<br/>PS4.RT:0<br/>PS4.ACC：1<br/>PS4.RESP:f |      |
|      |                                                              |      |
|      |                                                              |      |



# 其他

## 名称

前额：Frontal pole，Fp1、Fp2

侧额：Inferior Frontal，F7、F8

额：Frontal，F3、Fz、F4

颞：Temporal，T3(T7)、T4(T8)

中央：Central，C3、Cz、C4

后颞：Posterior temporal，T5(P7)、T6(P8)

顶：Parietal，P3、Pz、P4

枕：Occipital，O1、O2

耳：Auricular，A1、A2

![1723882259161](refs_pic/EEG-events/1723882259161.png)

![1723882289269](refs_pic/EEG-events/1723882289269.png)

# ERP成分

## 早期成分

**时间**：刺激开始后200ms以内的电位变化。

**特征**：具有通道特异性。视觉、听觉、诱发电位均有不同特征。

**视觉**：通常包括C1、颞枕区的P1和N1/N170，额中央区的N1和P2。

### C1成分

- 通常在头皮后部中线或偏侧电极位置幅度最大；
- 它会随着视觉刺激呈现的位置而发生变化，如下视野的刺激诱发的C1为正性，上视野的刺激诱发的C1为负性；水平视野中线的刺激可能只诱发很小的正性C1或没有明显的C1;
- C1通常开始于刺激呈现后40~60ms，峰值潜伏期约为80 ~ 100ms，不同的实验的结果有时会有不同；
- C1对刺激的物理属性非常敏感，如对比度、亮度、空间频率等，但不受注意的影响；
- 溯源分析发现C1产生于初级视皮层V1(纹状皮质)；

### P1、N1注意效应

- 在颞枕区，C1之后紧跟着P1成分，通常在偏枕区（如O1、O2）幅度最大，峰值潜伏期为100ms左右，但受到刺激对比度的显著影响。
- 头皮后部的P1，N1以及额区的N1均受注意的显著影响，表现为幅值的增加；
- 头皮后部分布的P1和头前部分布的N1，均受到注意的影响，但不是一个成分的极性反转，二者反映了不同的心理生理机制；

### P2

- 额中央区的N1成分之后，有一个显著的正成分，潜伏期为200ms左右，即为P2。该成分和靶刺激的早期识别有关，往往伴随着头皮后部的N2b的产生。
- 头皮前部分布的P2a和头皮后部分布的N2b具有不同的机制。N2b通常和任务以及刺激频率相关，但P2a反映的只是与任务相关的加工。
- 头皮后部，N1之后有一个明显的正成分或者正走向的潜伏期在200 ~ 300ms的P2。在复杂视觉刺激如面孔和文字的ERP研究中，头皮后部P2的潜伏期往往在250ms左右，因此也有研究将其称为P250，该成分与头皮前部的P2具有不同机制，可能与视觉信息的早期语义加工有关。

### N170/VPP

在颞枕区（特别是右侧颞枕区），面孔诱发出比对其他非面孔物体更大的负波，该负波在刺激呈现后170ms左右达到峰值，故称为N170。普遍认为，N170反映了面孔特异性的早期知觉加工，即面孔和非面孔的区别。（通常电极T5/P7、T6/P8）

当以双侧乳突或耳垂记录以及转换为平均参考时，面孔刺激产生显著的额中央区分布（VPP）【Fz,P9,P10】成分，潜伏期为刺激呈现后150 ~ 200 ms。由于VPP和N170具有相同性质，且具有相同皮层发生源，因此VPP可能属于N170在额区的极性反转。

为了防止视觉刺激的撤反应对N170的影响，**视觉刺激的呈现时间通常采用200 ~ 300 ms**，即N170出现后刺激图片消失。基于N170的脑区分布特性（分布于颞枕区），通常采用鼻尖，双侧耳垂（Eimer的实验）或者**离线转换为平均参考**（Rossion的实验）。应该重点观察和分析颞枕区的电极（P7/P8、PO7/PO8、P9/P10），而不是枕部（如O1/O2）。统计分析时，**需要将半球（左、右）作为一个因素进行方差分析**。

同时，其前的**P1**也需要注意，以确定N170的差异是否基于P1的变化。另外，采用双侧耳垂或乳突为参考电极时，对**VPP进行测量和分析也是完全必要的**。



# EPrime数据相关处理

## OnsetTime & OnsetDelay

在E-Prime中，`OnsetTime` 和 `OnsetDelay` 是两个与实验事件开始时间相关的概念。这两个概念对于理解实验事件的时间安排非常重要。

### OnsetTime

`OnsetTime` 表示的是实验事件开始的时间，它是相对于实验开始的时间点而言的。换句话说，`OnsetTime` 是指从实验开始到特定事件开始之间的时间差。

### OnsetDelay

`OnsetDelay` 表示的是实验事件开始的时间延迟，它是相对于前一个事件结束的时间点而言的。换句话说，`OnsetDelay` 是指从前一个事件结束到下一个事件开始之间的时间差。

### 示例解释

假设您正在进行一个简单的视觉刺激实验，其中包含一个刺激呈现阶段和一个被试的反应阶段。

- **实验开始** (t0): 实验程序启动。
- **刺激呈现** (t1): 刺激开始呈现的时间点。
- **刺激结束** (t2): 刺激结束的时间点。
- **被试反应** (t3): 被试做出反应的时间点。
- **OnsetTime**:
	- 刺激呈现的 `OnsetTime` 是指从实验开始 (t0) 到刺激呈现开始 (t1) 的时间差。
	- 被试反应的 `OnsetTime` 是指从实验开始 (t0) 到被试做出反应 (t3) 的时间差。
- **OnsetDelay**:
	- 刺激呈现的 `OnsetDelay` 是指从实验开始 (t0) 到刺激呈现开始 (t1) 的时间差。
	- 被试反应的 `OnsetDelay` 是指从刺激结束 (t2) 到被试做出反应 (t3) 的时间差。

### 注意事项

- `OnsetTime` 和 `OnsetDelay` 的单位通常是毫秒（ms）。
- 在实验设计中，`OnsetTime` 通常用于描述事件的绝对时间位置，而 `OnsetDelay` 用于描述事件之间的相对时间间隔。
- 在分析数据时，请确保理解这些变量的确切含义，以便正确地解释结果。

### 示例

假设您有一个实验，其中包含一个刺激呈现和一个按键反应。刺激呈现发生在实验开始后 500 ms，被试在刺激呈现后 300 ms 按下了按键。

- **OnsetTime**:
	- 刺激呈现的 `OnsetTime` 是 500 ms（从实验开始到刺激呈现的时间）。
	- 被试反应的 `OnsetTime` 是 800 ms（从实验开始到被试做出反应的时间）。
- **OnsetDelay**:
	- 刺激呈现的 `OnsetDelay` 是 500 ms（从实验开始到刺激呈现的时间）。
	- 被试反应的 `OnsetDelay` 是 300 ms（从刺激结束到被试做出反应的时间）。

# 阶段任务

## 1、EEG数据预处理

### 1.1 Resample

Resample to 500Hz的数据。

### 1.2 Rereference By M1 and M2

### 1.3  Exclude 

### 1.4 Hipass

### 1.5 Notch

### 1.6 Lopass

### 1.7 ICA

### 1.8 Split

#### 1.8.1 Split 5 mins

#### 1.8.2 Split resting state

#### 1.8.3 Split pre-meditation data

#### 1.8.4 Split after-meditation data

### 1.9 Extract sliced data for EEG

#### 1.9.1 Extract pre-meditation events

#### 1.9.2 Extract after-meditation events

### 1.10 Shrink sliced data

### 1.11 Rebase sliced data

#### 1.12 Compose sliced events

数据按照前实验、后实验，文字对文字、文字对图片、图片对图片、图片对文字的事件记录，累加平均。

## 2、ePrime数据预处理

## 2.1 将个人数据提取到同一个表中

## 3、数据分析

## 3.1 绘制个人的EEG通道数据

## 3.2 绘制多人的同一EEG通道数据

