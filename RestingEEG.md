# 静息态脑电图

静息态脑电图（EEG）分析是研究大脑自发活动的一种重要方法。静息态EEG数据通常是在被试者放松状态下记录的，没有特定的任务要求。这类研究可以帮助我们理解大脑的基础功能状态、神经网络的组织以及不同精神状态或疾病之间的差异。

以下是一些关于静息态EEG分析的重要文献示例及其一般步骤和结论概述。请注意，这些信息是基于过往的研究趋势给出的概括性描述，并非具体某篇文章的内容。



### 重要文献示例

1. **"Resting-State EEG in Major Depression: An Update and Review of the Literature"**
   - **作者**: Loo, C.K., & Mitchell, P.B.
   - **期刊**: Journal of Affective Disorders (2013)
   - **摘要**: 这篇综述文章讨论了使用静息态EEG在抑郁症研究中的应用。作者回顾了相关的研究并提出了可能的生物标记物。

2. **"Resting State EEG Power Spectral Density in Healthy Elderly Adults: Associations with Cognitive Performance and Amyloid Burden"**
   - **作者**: St Jacques, P., Johnson, N.F., et al.
   - **期刊**: Neurobiology of Aging (2015)
   - **摘要**: 本文探讨了静息态EEG功率谱密度与老年人认知表现及淀粉样蛋白负荷的关系。

3. **"Resting-state EEG and fMRI: a tutorial overview"**
   - **作者**: Mantini, D., Perrucci, M.G., Del Gratta, C., Romani, G.L., & Corbetta, M.
   - **期刊**: NeuroImage (2007)
   - **摘要**: 本文提供了静息态EEG和fMRI技术的综合教程，包括如何结合这两种技术进行分析。

### 静息态EEG分析的一般步骤

1. **数据采集**:
   - 使用EEG设备记录被试者的脑电信号。
   - 被试者通常需要保持安静状态，避免明显的身体运动。

2. **预处理**:
   - 数据过滤以去除噪声。
   - 可能会使用独立成分分析（ICA）等方法去除眼动、肌肉活动等伪迹。

3. **特征提取**:
   - 计算功率谱密度（PSD）来量化不同频带的能量。
   - 分析频带特异性特征，如α波、β波等。

4. **统计分析**:
   - 比较不同组别之间的频谱特征。
   - 进行相关性分析以探索EEG信号与行为表现或其他生理指标之间的关系。

5. **网络分析**:
   - 使用功能连接度量（如相位锁定值PLV）来评估不同脑区之间的同步性。

### 结论

- 静息态EEG研究通常能够揭示大脑在不同状态下的基础功能模式。
- 不同的精神状态（如抑郁、焦虑等）往往与特定的EEG频带功率变化有关。
- 在健康人群中，某些频带的变化可能与认知能力相关联。

为了获取最新的研究成果，建议查阅最近几年内发表的相关论文。您可以通过PubMed、Google Scholar等学术数据库搜索关键词“resting state EEG”来查找最新的文献。

# 功率谱计算

参考：https://blog.csdn.net/Ascn_/article/details/114450154

```
fs = 1000;
t = 0:1/fs:2-1/fs;
x = cos(2*pi*100*t)+randn(size(t));
[pxx,f] = pmtm(x,3,length(x),fs);
pmtm(x,3,length(x),fs);

% https://blog.csdn.net/Ascn_/article/details/114450154
```

# 分形维数

分形维数（Fractal Dimension）和功率谱（Power Spectral Density, PSD）都是用于分析信号复杂性和频率特性的工具，它们之间有一定的关系。虽然它们各自侧重于不同的方面，但在分析信号的复杂性和自相似性时，两者可以互相补充。以下是分形维数和功率谱之间的关系：

### 1. **信号复杂性和自相似性**

- **分形维数**：分形维数用于描述信号的复杂性和自相似性。一个信号的分形维数越高，表示其复杂性越高，即信号在不同尺度上表现出相似的特征。
- **功率谱**：功率谱分析用于描述信号在不同频率上的能量分布。通过分析功率谱，可以了解信号中不同频率成分的相对强度。

### 2. **分形维数与1/f噪声**

- **1/f噪声**：许多自然信号，包括EEG信号，在功率谱上表现出1/f噪声特性，即功率谱与频率呈反比关系。这种噪声特性通常与信号的自相似性相关。
- **分形维数与1/f噪声**：分形维数高的信号往往表现出更强的1/f噪声特性。这是因为自相似性较高的信号在不同尺度上表现出一致的波动特征，这在功率谱上表现为1/f噪声。

### 3. **分形维数与功率谱的关系**

- **分形维数与功率谱斜率**：在某些情况下，分形维数与功率谱的斜率之间存在关系。例如，对于具有1/f^β噪声特性的信号，β值与分形维数之间有一定的关系。具体来说，分形维数D与β之间的关系可以表示为：
  \[
  D = 2 - \beta / 2
  \]
  其中，β是功率谱斜率（即功率谱在对数坐标下的斜率）。

### 4. **应用示例**

- **EEG信号分析**：在EEG信号分析中，分形维数和功率谱都可以用来描述大脑活动的复杂性和自相似性。通过分析EEG信号的分形维数和功率谱，可以揭示不同脑区在不同状态下的活动特征。
- **噪声特性分析**：通过分析EEG信号的功率谱，可以发现1/f噪声特性，并进一步计算分形维数来描述这种自相似性。

### 示例代码

以下是一个示例代码，展示如何在MATLAB中计算EEG信号的分形维数和功率谱，并分析两者之间的关系：

```matlab
% 加载EEG数据
data = load('your_eeg_data.mat'); % 假设数据存储在名为'your_eeg_data.mat'的.mat文件中
eegData = data.eeg; % eegData 是一个矩阵，每一行是一个电极通道

% 数据预处理
fs = 256; % 假设采样频率为256Hz
lowcut = 1; % 低频截止频率
highcut = 40; % 高频截止频率
[b, a] = butter(2, [lowcut highcut]/(fs/2), 'bandpass'); % 设计带通滤波器
eegDataFiltered = filtfilt(b, a, eegData); % 应用滤波器

% 计算功率谱
[Pxx, f] = pwelch(eegDataFiltered', hann(length(eegDataFiltered)), [], [], fs);

% 平均功率谱
avgPxx = mean(Pxx, 2);

% 绘制功率谱图
figure;
semilogx(f, 10*log10(avgPxx)); % 将功率谱转换为dB单位
title('EEG Power Spectrum');
xlabel('Frequency (Hz)');
ylabel('Power (dB)');
grid on;
xlim([0 40]); % 设置频率范围

% 计算分形维数
numBoxes = 10; % 盒子数量
boxSizes = linspace(min(eegDataFiltered(:)), max(eegDataFiltered(:)), numBoxes); % 盒子大小范围
boxCounts = zeros(numBoxes, 1);

for i = 1:numBoxes
    boxSize = boxSizes(i);
    boxCount = 0;
    
    % 计算盒子覆盖
    for j = 1:size(eegDataFiltered, 1)
        % 计算每个通道的盒计数
        for k = 1:size(eegDataFiltered, 2)
            if eegDataFiltered(j, k) > boxSize * (boxCount + 1)
                boxCount = boxCount + 1;
            end
        end
    end
    
    boxCounts(i) = boxCount;
end

% 计算分形维数
logBoxSizes = log(boxSizes);
logBoxCounts = log(boxCounts);
coefficients = polyfit(logBoxSizes, logBoxCounts, 1);
fractalDimension = coefficients(1);

% 输出分形维数
fprintf('Fractal Dimension: %.4f\n', fractalDimension);

% 计算功率谱斜率
logFreq = log(f);
logPxx = log(avgPxx);
coefficientsPSD = polyfit(logFreq, logPxx, 1);
psdSlope = coefficientsPSD(1);

% 输出功率谱斜率
fprintf('PSD Slope: %.4f\n', psdSlope);

% 根据功率谱斜率计算分形维数
estimatedFractalDimension = 2 - psdSlope / 2;
fprintf('Estimated Fractal Dimension from PSD Slope: %.4f\n', estimatedFractalDimension);

% 绘制盒计数与盒子大小的关系图
figure;
plot(logBoxSizes, logBoxCounts, 'o-');
title('Log-Log Plot of Box Counts vs. Box Sizes');
xlabel('Log(Box Size)');
ylabel('Log(Box Count)');
grid on;

% 显示拟合线
hold on;
plot(logBoxSizes, polyval(coefficients, logBoxSizes), 'r--');
legend('Box Counts', 'Fitted Line');
```

### 代码解释

1. **加载数据**：加载EEG数据并进行滤波处理。
2. **计算功率谱**：使用`pwelch`函数计算EEG信号的功率谱。
3. **绘制功率谱图**：绘制EEG信号的平均功率谱。
4. **计算分形维数**：使用盒计数方法计算EEG信号的分形维数。
5. **计算功率谱斜率**：通过线性拟合计算功率谱的斜率。
6. **估计分形维数**：根据功率谱斜率计算分形维数，并与实际计算的分形维数进行比较。

通过上述步骤，可以分析EEG信号的复杂性和自相似性，并探讨分形维数与功率谱之间的关系。 

https://blog.csdn.net/tomue/article/details/129323277?utm_medium=distribute.pc_relevant.none-task-blog-2~default~baidujs_baidulandingword~default-0-129323277-blog-129380459.235^v43^pc_blog_bottom_relevance_base2&spm=1001.2101.3001.4242.1&utm_relevant_index=3