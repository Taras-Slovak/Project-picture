const checkTesxtInputs = (selector) => {
    const txtInputs = document.querySelectorAll(selector);
    txtInputs.forEach(input => {
        input.addEventListener('keypress', function (e) {
            if (e.key.match(/[^a-z 0-9]/ig)) {
                e.preventDefault();
            }

        });
        input.addEventListener('change', (e) => {

            if (e.target.value.match(/[^a-z 0-9]/ig)) {
                e.target.value = '';
            }


        });
    });
};

export default checkTesxtInputs;