(() => {
    setInterval(() => {
        Array.from(document.querySelectorAll(".tox.tox-silver-sink.tox-tinymce-aux"))?.map(tox => {
            tox.remove();
        })
    }, 300)
})()