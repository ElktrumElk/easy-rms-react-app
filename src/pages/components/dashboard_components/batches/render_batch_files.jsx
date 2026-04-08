/**
 * This render outs the files for each batch
 */

export function renderFilesComponent(filesData, parentContainer, sortDirection = 'ascending', onElementCreate = null) {
    const startIdx = sortDirection === 'ascending' ? 0 : filesData.length - 1;
    const isAscending = sortDirection === 'ascending';

    for (let i = startIdx; isAscending ? i < filesData.length : i >= 0; isAscending ? i++ : i--) {
        
        const dateGroup = filesData[i];
        const groupElement = document.createElement('div');
        groupElement.setAttribute('class', 'group_time-4');

        const dateElement = document.createElement('span');
        dateElement.setAttribute('class', 'sec_date-4');
        dateElement.innerText = `${dateGroup.date} ${dateGroup.year}`;
        groupElement.appendChild(dateElement);

        dateGroup.files.forEach((file) => {
            const fileCnt = document.createElement('div');
            fileCnt.setAttribute('class', 'file_sub_cnt-4');

            const fileNameSect = document.createElement('div');
            fileNameSect.setAttribute('class', 'file_name-4');

            const fileIcon = document.createElement('img');
            fileIcon.setAttribute('class', 'file_type_ic-4');
            fileIcon.setAttribute('src', 'https://img.icons8.com/?size=100&id=117561&format=png&color=000000');
            fileNameSect.appendChild(fileIcon);

            const fileName = document.createElement('span');
            fileName.setAttribute('class', 'fn');
            fileName.innerText = file.name;
            fileNameSect.appendChild(fileName);

            fileCnt.appendChild(fileNameSect);

            const fileTimeCnt = document.createElement('span');
            fileTimeCnt.setAttribute('class', 'time-4');

            const fileTime = document.createElement('span');
            fileTime.innerText = file.time;
            fileTimeCnt.appendChild(fileTime);

            const downloadBtn = document.createElement('button');
            downloadBtn.setAttribute('class', 'download_btn-4');

            const downloadIc = document.createElement('img');
            downloadIc.setAttribute('class', 'download_ic');
            downloadIc.setAttribute('src', 'https://img.icons8.com/?size=100&id=83159&format=png&color=FFFFFF');
            downloadBtn.appendChild(downloadIc);

            const downloadText = document.createElement('span');
            downloadText.innerText = 'Download';
            downloadBtn.appendChild(downloadText);

            fileTimeCnt.appendChild(downloadBtn);
            fileCnt.appendChild(fileTimeCnt);
            groupElement.appendChild(fileCnt);
        });

        parentContainer.appendChild(groupElement);

        if (typeof onElementCreate === 'function') {
            onElementCreate(groupElement);
        }
    }
}