// 本地数据，包括名称和对应的链接
const data = [
    { name: 'Adobe 2025全家桶', link1: 'https://pan.xunlei.com/s/VOEIRhnG4Ya62p5mkrjh2i07A1?pwd=wubh#', link2: '#' },
    { name: 'Adobe 2024全家桶', link1: 'https://pan.xunlei.com/s/VOEISY63JT9qrwPnhuWoKVSrA1?pwd=394u#', link2: '#' },
    { name: 'Adobe 2023全家桶', link1: 'https://pan.xunlei.com/s/VOEISdD_keaC4Rnt4ItiOy1wA1?pwd=9k8y#', link2: '#' },
    { name: 'Adobe 2022全家桶', link1: 'https://pan.xunlei.com/s/VOEIUKSo8YakUoKzRvHyRAdpA1?pwd=czm6#', link2: '#' },
    { name: 'Adobe 2021全家桶', link1: 'https://pan.xunlei.com/s/VOEIUTB9CkjvYimnTGWvXZiwA1?pwd=f4ma#', link2: '#' },
    { name: 'Adobe 2020全家桶', link1: 'https://pan.xunlei.com/s/VOEIUacX8YakUoKzRvHyRIF4A1?pwd=tccz#', link2: '#' },
    { name: 'Adobe 2019全家桶', link1: 'https://pan.xunlei.com/s/VOEIUklzzkZkQ432H1zRQPOLA1?pwd=hiwi#', link2: '#' },
    { name: 'Adobe 2018全家桶', link1: 'https://pan.xunlei.com/s/VOEIUqeBRLgaEjUv-8JqOjjNA1?pwd=828j#', link2: '#' },
    { name: 'Photoshop(PS)2025', link1: 'https://pan.xunlei.com/s/VOEIVCEPkeaC4Rnt4ItiPv8BA1?pwd=aeum#', link2: '#' },
    { name: 'Photoshop(PS)2024', link1: 'https://pan.xunlei.com/s/VOEIVHVMHtBWt6akwBrXCGBKA1?pwd=x2kq#', link2: '#' },
    { name: 'Photoshop(PS)2023', link1: 'https://pan.xunlei.com/s/VOEIVMwJf47rQvePICwLpUIIA1?pwd=kvbe#', link2: '#' },
    { name: 'Photoshop(PS)2022', link1: 'https://pan.xunlei.com/s/VOEIVR_8imJ5xX98QGS_QvBoA1?pwd=innc#', link2: '#' },
    { name: 'Photoshop(PS)2021', link1: 'https://pan.xunlei.com/s/VOEK9cXtGmf-20uxzOzN1KpkA1?pwd=u7qn#', link2: '#' },
    { name: 'Photoshop(PS)2020', link1: 'https://pan.xunlei.com/s/VOEK9g0HaMAPYfBmNUWDNnm8A1?pwd=gwiq#', link2: '#' },
    { name: 'Photoshop(PS)2019', link1: 'https://pan.xunlei.com/s/VOEK9jwsaMAPYfBmNUWDNqlgA1?pwd=ijj6#', link2: '#' },
    { name: 'Photoshop(PS)2018', link1: 'https://pan.xunlei.com/s/VOEK9muTDOAkeHJQzQaYukUWA1?pwd=wdj4#', link2: '#' },
    { name: 'Photoshop(PS)2017', link1: 'https://pan.xunlei.com/s/VOEK9pwq8HiN-rT80AMboCj6A1?pwd=rp64#', link2: '#' },
    { name: 'Photoshop(PS)CS6', link1: 'https://pan.xunlei.com/s/VOEK9v-jwj8BlTmeR44wVdI7A1?pwd=wpds#', link2: '#' },
    { name: 'Premiere(PR)2025', link1: 'https://pan.xunlei.com/s/VOEKBRIwhhPtuR3NAlMDDGNcA1?pwd=9e5n#', link2: '#' },
    { name: 'Premiere(PR)2024', link1: 'https://pan.xunlei.com/s/VOEKDzle1lSI7evBd1_k7iYcA1?pwd=dkuh#', link2: '#' },
    { name: 'Premiere(PR)2023', link1: 'https://pan.xunlei.com/s/VOEKESFbwj8BlTmeR44wYcf7A1?pwd=y2p5#', link2: '#' },


    { name: 'AutoCAD 2025', link1: 'https://pan.xunlei.com/s/VOEKFQC1_k89bkSSS_5wMFPjA1?pwd=dguj#', link2: '#' },
    { name: 'AutoCAD 2024', link1: 'https://pan.xunlei.com/s/VOEKF_Ryr1lcxE2OFLL9gUDpA1?pwd=i47z#', link2: '#' },

    { name: 'WinRAR', link1: 'https://pan.quark.cn/s/f575bc74c42c', link2: '#' },
    { name: 'Bandizip', link1: 'https://pan.quark.cn/s/fd768678a466', link2: '#' },
    { name: '7-zip', link1: 'https://pan.quark.cn/s/1ce8ccfb6d2f', link2: '#' },
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