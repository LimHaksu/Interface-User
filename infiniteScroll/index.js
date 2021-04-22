const topDom = document.querySelector("#top");
const bottomDom = document.querySelector("#bottom");
const wrapper = document.querySelector("#wrapper");

const dataSize = 200_000;
const dataList = Array.from(Array(dataSize), (_, i) => `data-number-${i + 1}`);

const io = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                if (entry.target === topDom) {
                    appendPrev(wrapper);
                } else if (entry.target === bottomDom) {
                    appendNext(wrapper);
                }
            }
        });
    },
    {
        root: null, // null 일경우 브라우저 뷰포트, default 값 : null
    }
);

io.observe(topDom);
io.observe(bottomDom);

const size = 50;

const last = {
    startIndex: 0 - size,
    endIndex: -1,
};

function appendPrev(wrapperDom) {
    const prevStartIndex = last.startIndex - size * 3;
    const prevEndIndex = last.endIndex - size * 3;
    if (prevStartIndex >= 0) {
        wrapperDom.removeChild(wrapperDom.children[2]);
        const prevDom = document.createElement("div");
        for (let i = prevStartIndex; i <= prevEndIndex; ++i) {
            const data = dataList[i];
            const dom = document.createElement("div");
            dom.textContent = data;
            prevDom.appendChild(dom);
        }
        const centerDom = wrapperDom.children[0].children[0];
        wrapperDom.insertBefore(prevDom, wrapperDom.children[0]);
        setTimeout(() => {
            centerDom.scrollIntoView();
        }, 200);
        last.startIndex -= size;
        last.endIndex -= size;
    }
}

function appendNext(wrapperDom) {
    wrapperDom.removeChild(wrapperDom.children[0]);
    const nextStartIndex = last.startIndex + size;
    const nextEndIndex = last.endIndex + size;
    const nextDom = document.createElement("div");
    for (let i = nextStartIndex; i <= nextEndIndex; ++i) {
        const data = dataList[i];
        const dom = document.createElement("div");
        dom.textContent = data;
        nextDom.appendChild(dom);
    }
    wrapperDom.appendChild(nextDom);
    last.startIndex += size;
    last.endIndex += size;
}

appendNext(wrapper);
