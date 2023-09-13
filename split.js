    let typeSplit;
    // Split the text up
    function runSplit() {
        typeSplit = new SplitType("[text-split]", {
            types: "chars"
            , tagName: "span"
        });
    }
    runSplit();
    // Update on window resize
    let windowWidth = window.innerWidth;

    function checkWidth() {
        if (windowWidth !== window.innerWidth) {
            windowWidth = window.innerWidth;
            typeSplit.revert();
            runSplit();
        }
    }
    window.addEventListener("resize", checkWidth);