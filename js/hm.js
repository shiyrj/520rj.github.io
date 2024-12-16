// 本地数据，包括名称和对应的链接
const data = [
    { name: 'Adobe 2025全家桶', link1: 'https://pan.xunlei.com/s/VOB5rug0hSYdcDgWM9Rabd4zA1?pwd=sqbu#', link2: '#' },
    { name: 'Adobe 2024全家桶', link1: 'https://pan.xunlei.com/s/VNqvPYjEjiKYJL6I2T5x1tEZA1?pwd=2b22#', link2: '#' },
    { name: 'Adobe 2023全家桶', link1: 'https://pan.quark.cn/s/138467ac99c1', link2: '#' },
    { name: 'Adobe 2022全家桶', link1: 'https://pan.xunlei.com/s/VNrA0ieY4ASlDvG20ze1GGVmA1?pwd=8mxf#', link2: '#' },
    { name: 'Adobe 2021全家桶', link1: 'https://pan.xunlei.com/s/VNrA0m_x2QOsWr-7uJdRL7yoA1?pwd=8mvt#', link2: '#' },
    { name: 'Adobe 2020全家桶', link1: 'https://pan.xunlei.com/s/VNrA0qrCLJHDpCKMnC4wQXmDA1?pwd=tg7y#', link2: '#' },
    { name: 'Adobe 2019全家桶', link1: 'https://pan.xunlei.com/s/VNrA0w1mC3DWufWRhvGfj9NgA1?pwd=rjud#', link2: '#' },
    { name: 'Adobe 2018全家桶', link1: 'https://pan.xunlei.com/s/VNrA1-8dqGsvO8IvWyPaZql4A1?pwd=sevd#', link2: '#' },
    { name: 'Photoshop 2025', link1: 'https://pan.xunlei.com/s/VO9jSN6T9xPofLT-PNjzmpyHA1?pwd=k7me#', link2: '#' },
    { name: 'Photoshop 2024', link1: 'https://pan.xunlei.com/s/VOCn4xw6MRX4g6LqqHf2klyOA1?pwd=w2xz#', link2: '#' },
    { name: 'Photoshop 2023', link1: 'https://pan.quark.cn/s/f4599a1c6626', link2: '#' },
    { name: 'Photoshop 2022', link1: 'https://pan.quark.cn/s/124f058f60c6', link2: '#' },
    // ... 更多数据项
];

// 获取DOM元素
const searchBox = document.getElementById('searchInput');
const suggestionsDiv = document.getElementById('dropdown');

// 显示搜索建议
function showSuggestions(query) {
    suggestionsDiv.innerHTML = '';
    const filteredData = data.filter(item => item.name.toLowerCase().includes(query.toLowerCase()));
    if (filteredData.length > 0) {
        suggestionsDiv.style.display = 'block';
        filteredData.forEach(item => {
            const suggestionItem = document.createElement('div');
            suggestionItem.className = 'suggestion-item';
            suggestionItem.addEventListener('click', () => {
                // 这里可以处理点击建议项的逻辑，比如填充搜索框或跳转等
                // 本例中仅做演示，不实际跳转或填充
            });

            const suggestionContent = document.createElement('div');
            suggestionContent.className = 'suggestion-content';
            suggestionContent.textContent = item.name;
            suggestionItem.appendChild(suggestionContent);

            const suggestionButtons = document.createElement('div');
            suggestionButtons.className = 'suggestion-buttons';

            const viewButton1 = document.createElement('a');
            viewButton1.className = 'a'
            viewButton1.textContent = '下载';
            viewButton1.onclick = () => window.location.href = item.link1;
            suggestionButtons.appendChild(viewButton1);

            const viewButton2 = document.createElement('a');
            viewButton2.className = 'a'
            viewButton2.textContent = '教程';
            viewButton2.onclick = () => window.location.href = item.link2;
            suggestionButtons.appendChild(viewButton2);

            suggestionItem.appendChild(suggestionButtons);
            suggestionsDiv.appendChild(suggestionItem);
        });
    } else {
        suggestionsDiv.style.display = 'none';
    }
}

// 监听搜索框输入事件
searchBox.addEventListener('input', (event) => {
    showSuggestions(event.target.value);
});

// 点击页面其他地方时隐藏建议框
document.addEventListener('click', (event) => {
    if (!searchBox.contains(event.target)) {
        suggestionsDiv.style.display = 'none';
    }
});