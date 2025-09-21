// 간단한 비밀번호 확인
const correctPassword = "schedule2024";
const userPassword = prompt("일정 관리 시스템 접근을 위해 비밀번호를 입력하세요:");

if (userPassword !== correctPassword) {
    document.body.innerHTML = `
        <div style="display: flex; justify-content: center; align-items: center; height: 100vh; background: #f8fafc; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;">
            <div style="text-align: center; padding: 2rem; background: white; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                <h2 style="color: #dc2626; margin-bottom: 1rem;">🔒 접근이 거부되었습니다</h2>
                <p style="color: #64748b; margin-bottom: 1.5rem;">올바른 비밀번호를 입력해주세요.</p>
                <button onclick="location.reload()" style="background: #6366f1; color: white; border: none; padding: 0.75rem 1.5rem; border-radius: 6px; cursor: pointer; font-size: 1rem;">다시 시도</button>
            </div>
        </div>
    `;
} else {
    // 일정 관리 시스템 실행
    const people = [
        { id: 'A', name: '구민서', email: '201belief@naver.com' },
        { id: 'B', name: '김송현', email: 'cjyeon204@gmail.com' },
        { id: 'C', name: '석은선', email: 'moonrabbit1080@gmail.com' },
        { id: 'D', name: '김민아', email: 'poline7006@naver.com' },
        { id: 'E', name: '우미희', email: 'eunbichoi0926@gmail.com' },
        { id: 'F', name: '정설민', email: 'jsmsmile09@kakao.com' },
        { id: 'G', name: '박세현', email: 'seddoek@naver.com' },
        { id: 'H', name: '김경난', email: 'nan0903@naver.com' },
        { id: 'J', name: '박채은', email: 'poppop2683@gmail.com' },
        { id: 'K', name: '이예은', email: 'dpdms3531@gmail.com' },
        { id: 'M', name: '홍소요', email: 'soyohong0320@daum.net' },
        { id: 'N', name: '강혜인', email: '0720-1@naver.com' },
        { id: 'P', name: '박시현', email: '041112psh@gmail.com' },
        { id: 'R', name: '권예림', email: 'yrkwon1221@gmail.com' },
        { id: 'S', name: '양효슬', email: 'hs11137@naver.com' },
        { id: 'T', name: '송소율', email: 'soyoul0408@naver.com' },
        { id: 'U', name: '박서현', email: 'sunsetcafe320@naver.com' },
        { id: 'V', name: '이슬비', email: 'slb4750@kakao.com' },
        { id: 'W', name: '박현비', email: 'hrunbi@daum.net' },
        { id: 'X', name: '김서현', email: 'seohyun790@naver.com' },
        { id: 'Y', name: '노승주', email: 'seungjoo06@kakao.com' },
        { id: 'Z', name: '박경진', email: 'pgj4757@naver.com' },
        { id: 'AB', name: '박채윤', email: 'parkchaeyoon0529@gmail.com' },
        { id: 'AC', name: '김도현', email: 'kdhyun730@naver.com' },
        { id: 'AD', name: '김라헬', email: 'henge1216@gmail.com' },
        { id: 'AE', name: '홍소연', email: 'daysanare0512@gmail.com' },
        { id: 'AF', name: '박선주', email: 'sunzu169@kakao.com' },
        { id: 'AG', name: '임소희', email: 'ppaowkeueh1738@gmail.com' },
        { id: 'AJ', name: '이예림', email: 'iamyierim@naver.com' },
        { id: 'AK', name: '김민서', email: 'alstjalstj1008@kakao.com' },
        { id: 'AM', name: '최혜원', email: 'soeul3552@gmail.com' },
        { id: 'AP', name: '장수인', email: 'k01040234625@gmail.com' },
        { id: 'AR', name: '이유경', email: 'you070106_@kakao.com' },
        { id: 'AT', name: '임유나', email: 'vkfksdb1125@naver.com' },
        { id: 'AU', name: '심서영', email: 'syoungbh0317@gmail.com' },
        { id: 'AV', name: '이태경', email: 'taekyung6277@naver.com' },
        { id: 'AW', name: '신민주', email: 'jully7308@naver.com' },
        { id: 'AX', name: '서연제', email: 'aceget22@naver.com' },
        { id: 'AY', name: '김민지', email: 'star220300@gmail.com' },
        { id: 'AZ', name: '사용자', email: 'apelsk1245@naver.com' },
        { id: 'BA', name: '이명현', email: 'dlaudgus9178@naver.com' },
        { id: 'BC', name: '서혜민', email: 'artheemin@naver.com' },
        { id: 'BD', name: '사용자', email: 'sandyshin08@gmail.com' },
        { id: 'BE', name: '사용자', email: 'ariari2168@naver.com' },
        { id: 'BF', name: '김서인', email: 'se1n6@daum.net' },
        { id: 'BH', name: '조나윤', email: 'a01032046784@gmail.com' },
        { id: 'BK', name: '차주아', email: 'zszs66iidf@gmail.com' },
        { id: 'BN', name: '신주영', email: 'swndud1124@gmail.com' },
        { id: 'BP', name: '오혜원', email: 'ttma2007@naver.com' },
        { id: 'BR', name: '사용자', email: 'lin0201@naver.com' },
        { id: 'BS', name: '남희지', email: 'huiji071213@gmail.com' },
        { id: 'BV', name: '김보라', email: 'bola20659@daum.net' },
        { id: 'BW', name: '박사랑', email: 'bb8s@kakao.com' },
        { id: 'BY', name: '홍서연', email: 'pigret1107@naver.com' },
        { id: 'CA', name: '사용자', email: 'pepe1125@daum.net' }
    ];

    const colors = [
        '#ef4444', '#f97316', '#eab308', '#22c55e', '#10b981', '#14b8a6', '#06b6d4', '#0ea5e9',
        '#3b82f6', '#6366f1', '#8b5cf6', '#a855f7', '#d946ef', '#ec4899', '#f43f5e', '#84cc16',
        '#65a30d', '#059669', '#0891b2', '#0284c7', '#2563eb', '#4f46e5', '#7c3aed', '#9333ea',
        '#c026d3', '#db2777', '#be123c', '#dc2626', '#ea580c', '#d97706', '#ca8a04', '#16a34a',
        '#15803d', '#0f766e', '#0e7490', '#0369a1', '#1d4ed8', '#3730a3', '#6b21a8', '#7e22ce',
        '#a21caf', '#be185d', '#9f1239', '#991b1b', '#9a3412', '#92400e', '#a16207', '#92400e',
        '#a16207', '#059669', '#0891b2', '#0284c7', '#2563eb', '#4f46e5'
    ];

    let scheduleData = {};
    let isDragging = false;
    let dragMode = null;
    let dragPersonId = null;
    let dragStarted = false;
    let dataSource = 'local'; // 'local' or 'shared'

    function init() {
        generateScheduleTable();
        loadFromLocalStorage();
        updateStats();
        updateManagerChanges();
        updateDataSourceStatus();
    }

    // 공유 데이터 패널 관련 함수들
    function loadSharedData() {
        const panel = document.getElementById('shared-data-panel');
        panel.classList.add('active');
    }

    function closeSharedPanel() {
        const panel = document.getElementById('shared-data-panel');
        panel.classList.remove('active');
    }

    async function loadFromURL() {
        const url = document.getElementById('json-url').value.trim();
        if (!url) {
            alert('URL을 입력해주세요.');
            return;
        }

        try {
            const status = document.getElementById('auto-save-status');
            status.textContent = '데이터 불러오는 중...';
            status.style.background = '#fbbf24';

            // CORS 프록시를 사용하여 로컬에서도 작동하도록 수정
            let fetchURL = url;
            if (window.location.protocol === 'file:' || window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
                // 로컬 환경에서는 CORS 프록시 사용
                fetchURL = `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`;
            }

            const response = await fetch(fetchURL);
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}: ${response.statusText}`);
            }

            let data;
            if (fetchURL.includes('allorigins.win')) {
                const proxyResponse = await response.json();
                data = JSON.parse(proxyResponse.contents);
            } else {
                data = await response.json();
            }
            
            if (!data.scheduleData && !data.timestamp) {
                throw new Error('올바른 스케줄 데이터 형식이 아닙니다.');
            }

            scheduleData = data.scheduleData || {};
            dataSource = 'shared';
            
            updateScheduleUI();
            updateStats();
            updateManagerChanges();
            updateDataSourceStatus();
            
            // URL 저장
            localStorage.setItem('sharedDataURL', url);
            
            status.textContent = `공유 데이터 로드 완료 (${new Date(data.timestamp || Date.now()).toLocaleString()})`;
            status.style.background = '#dcfce7';
            
            closeSharedPanel();
            alert('공유 데이터를 성공적으로 불러왔습니다!');
            
        } catch (error) {
            console.error('공유 데이터 로드 실패:', error);
            const status = document.getElementById('auto-save-status');
            status.textContent = '공유 데이터 로드 실패';
            status.style.background = '#fecaca';
            
            alert(`데이터 로드에 실패했습니다:\n${error.message}\n\n로컬 환경에서는 파일을 직접 업로드하거나 서버에 호스팅 후 사용해주세요.`);
        }
    }

    function saveCurrentAsShared() {
        const sharedData = {
            scheduleData: scheduleData,
            people: people,
            timestamp: new Date().toISOString(),
            version: "1.0"
        };
        
        const dataStr = JSON.stringify(sharedData, null, 2);
        const dataBlob = new Blob([dataStr], {type: 'application/json'});
        const url = URL.createObjectURL(dataBlob);
        
        const link = document.createElement('a');
        link.href = url;
        link.download = `shared_schedule_${new Date().toISOString().split('T')[0]}.json`;
        link.click();
        
        URL.revokeObjectURL(url);
        
        alert('JSON 파일이 다운로드되었습니다!\n\n다운로드된 파일을:\n1. GitHub 저장소에 업로드하거나\n2. Firebase Storage에 업로드하거나\n3. 다른 호스팅 서비스에 업로드한 후\n해당 URL을 사용하여 공유하세요.');
    }

    function updateDataSourceStatus() {
        const statusElement = document.getElementById('data-source-status');
        if (dataSource === 'shared') {
            statusElement.textContent = '🌐 공유 데이터';
            statusElement.style.color = '#16a34a';
        } else {
            statusElement.textContent = '💾 로컬 데이터';
            statusElement.style.color = '#64748b';
        }
    }

    // 자동 새로고침 기능 (공유 데이터인 경우)
    function startAutoRefresh() {
        if (dataSource === 'shared') {
            const savedURL = localStorage.getItem('sharedDataURL');
            if (savedURL) {
                setInterval(() => {
                    loadFromURLSilently(savedURL);
                }, 30000); // 30초마다 새로고침
            }
        }
    }

    async function loadFromURLSilently(url) {
        try {
            const response = await fetch(url);
            if (response.ok) {
                const data = await response.json();
                if (data.scheduleData) {
                    const oldDataString = JSON.stringify(scheduleData);
                    const newDataString = JSON.stringify(data.scheduleData);
                    
                    if (oldDataString !== newDataString) {
                        scheduleData = data.scheduleData;
                        updateScheduleUI();
                        updateStats();
                        updateManagerChanges();
                        
                        const status = document.getElementById('auto-save-status');
                        status.textContent = '공유 데이터 자동 업데이트됨';
                        status.style.background = '#dbeafe';
                        setTimeout(() => {
                            status.textContent = `공유 데이터 (${new Date().toLocaleTimeString()})`;
                            status.style.background = '#dcfce7';
                        }, 3000);
                    }
                }
            }
        } catch (error) {
            console.error('자동 새로고침 실패:', error);
        }
    }

    function generateScheduleTable() {
        const tbody = document.getElementById('schedule-body');
        tbody.innerHTML = '';

        people.forEach((person, index) => {
            const row = document.createElement('tr');
            
            const personCell = document.createElement('td');
            personCell.className = 'person-info';
            personCell.innerHTML = `
                <span class="person-id" style="background-color: ${colors[index]}">${person.id}</span>
                <div class="person-name">${person.name}</div>
                <div class="person-email">${person.email}</div>
            `;
            personCell.addEventListener('click', () => togglePersonAllHours(person.id));
            row.appendChild(personCell);

            for (let hour = 0; hour < 24; hour++) {
                const timeCell = document.createElement('td');
                timeCell.className = 'time-cell';
                timeCell.dataset.personId = person.id;
                timeCell.dataset.hour = hour;
                timeCell.dataset.hourDisplay = hour.toString().padStart(2, '0');
                
                timeCell.addEventListener('mousedown', startDrag);
                timeCell.addEventListener('mouseenter', handleDragEnter);
                timeCell.addEventListener('mouseup', endDrag);
                timeCell.addEventListener('click', toggleTimeSlot);
                
                row.appendChild(timeCell);
            }
            
            tbody.appendChild(row);
        });

        document.addEventListener('mouseup', endDrag);
    }

    function startDrag(event) {
        if (dataSource === 'shared') {
            alert('공유 데이터 모드에서는 편집할 수 없습니다.\n로컬 데이터로 전환하거나 새로운 데이터를 만드세요.');
            return;
        }
        
        event.preventDefault();
        isDragging = true;
        dragStarted = false;
        const cell = event.target;
        dragPersonId = cell.dataset.personId;
        const personId = cell.dataset.personId;
        const hour = parseInt(cell.dataset.hour);
        
        if (!scheduleData[personId]) {
            scheduleData[personId] = [];
        }
        
        dragMode = scheduleData[personId].includes(hour) ? 'deselect' : 'select';
    }

    function handleDragEnter(event) {
        if (!isDragging || dataSource === 'shared') return;
        
        const cell = event.target;
        const personId = cell.dataset.personId;
        
        if (personId !== dragPersonId) return;
        
        if (!dragStarted) {
            dragStarted = true;
        }
        
        cell.classList.add('drag-hover');
        toggleCellState(cell, dragMode);
    }

    function endDrag() {
        if (!isDragging) return;
        
        isDragging = false;
        dragMode = null;
        dragPersonId = null;
        dragStarted = false;
        
        document.querySelectorAll('.drag-hover').forEach(cell => {
            cell.classList.remove('drag-hover');
        });
        
        if (dataSource === 'local') {
            updateStats();
            updateManagerChanges();
            saveToLocalStorage();
        }
    }

    function toggleCellState(cell, mode) {
        const personId = cell.dataset.personId;
        const hour = parseInt(cell.dataset.hour);
        const personIndex = people.findIndex(p => p.id === personId);
        
        if (!scheduleData[personId]) {
            scheduleData[personId] = [];
        }
        
        const hourIndex = scheduleData[personId].indexOf(hour);
        
        if (mode === 'select' && hourIndex === -1) {
            scheduleData[personId].push(hour);
            cell.classList.add('selected');
            cell.style.backgroundColor = colors[personIndex];
        } else if (mode === 'deselect' && hourIndex > -1) {
            scheduleData[personId].splice(hourIndex, 1);
            cell.classList.remove('selected');
            cell.style.backgroundColor = '';
        }
    }

    function toggleTimeSlot(event) {
        if (dragStarted || dataSource === 'shared') return;
        
        const cell = event.target;
        const personId = cell.dataset.personId;
        const hour = parseInt(cell.dataset.hour);
        
        if (!scheduleData[personId]) {
            scheduleData[personId] = [];
        }

        const hourIndex = scheduleData[personId].indexOf(hour);
        if (hourIndex > -1) {
            scheduleData[personId].splice(hourIndex, 1);
            cell.classList.remove('selected');
            cell.style.backgroundColor = '';
        } else {
            scheduleData[personId].push(hour);
            cell.classList.add('selected');
            const personIndex = people.findIndex(p => p.id === personId);
            cell.style.backgroundColor = colors[personIndex];
        }

        updateStats();
        updateManagerChanges();
        saveToLocalStorage();
    }

    function togglePersonAllHours(personId) {
        if (dataSource === 'shared') {
            alert('공유 데이터 모드에서는 편집할 수 없습니다.');
            return;
        }
        
        if (!scheduleData[personId]) {
            scheduleData[personId] = [];
        }

        const hasSelectedHours = scheduleData[personId].length > 0;
        const personIndex = people.findIndex(p => p.id === personId);

        if (hasSelectedHours) {
            scheduleData[personId] = [];
            for (let hour = 0; hour < 24; hour++) {
                const cell = document.querySelector(`[data-person-id="${personId}"][data-hour="${hour}"]`);
                if (cell) {
                    cell.classList.remove('selected');
                    cell.style.backgroundColor = '';
                }
            }
        } else {
            scheduleData[personId] = Array.from({length: 24}, (_, i) => i);
            for (let hour = 0; hour < 24; hour++) {
                const cell = document.querySelector(`[data-person-id="${personId}"][data-hour="${hour}"]`);
                if (cell) {
                    cell.classList.add('selected');
                    cell.style.backgroundColor = colors[personIndex];
                }
            }
        }

        updateStats();
        updateManagerChanges();
        saveToLocalStorage();
    }

    function updateStats() {
        const totalPeople = people.length;
        let totalSelectedHours = 0;
        let peopleWithSchedule = 0;

        Object.keys(scheduleData).forEach(personId => {
            const hours = scheduleData[personId] ? scheduleData[personId].length : 0;
            if (hours > 0) {
                totalSelectedHours += hours;
                peopleWithSchedule++;
            }
        });

        const avgHours = peopleWithSchedule > 0 ? (totalSelectedHours / peopleWithSchedule).toFixed(1) : 0;

        document.getElementById('total-people').textContent = totalPeople;
        document.getElementById('selected-hours').textContent = totalSelectedHours;
        document.getElementById('avg-hours').textContent = avgHours + 'h';

        updateHourlyStats();
    }

    function updateHourlyStats() {
        const hourlyCount = Array(24).fill(0);
        Object.keys(scheduleData).forEach(personId => {
            if (scheduleData[personId]) {
                scheduleData[personId].forEach(hour => {
                    hourlyCount[hour]++;
                });
            }
        });

        const maxCount = Math.max(...hourlyCount);
        const chartContainer = document.getElementById('hourly-chart');
        chartContainer.innerHTML = '';

        hourlyCount.forEach((count, hour) => {
            const barContainer = document.createElement('div');
            barContainer.className = 'chart-bar';
            
            const barHeight = maxCount > 0 ? Math.max(2, (count / maxCount) * 70) : 2;
            
            barContainer.innerHTML = `
                <div class="chart-value">${count}</div>
                <div class="bar" style="height: ${barHeight}px;"></div>
                <div class="chart-label">${hour.toString().padStart(2, '0')}</div>
            `;
            
            chartContainer.appendChild(barContainer);
        });
    }

    function updateManagerChanges() {
        const changesGrid = document.getElementById('changes-grid');
        changesGrid.innerHTML = '';

        const hourlyManagers = {};
        for (let hour = 0; hour < 24; hour++) {
            hourlyManagers[hour] = [];
            Object.keys(scheduleData).forEach(personId => {
                if (scheduleData[personId] && scheduleData[personId].includes(hour)) {
                    const person = people.find(p => p.id === personId);
                    if (person) { // 모든 사람 포함 (ID 길이 조건 제거)
                        hourlyManagers[hour].push(person);
                    }
                }
            });
        }

        let hasChanges = false;
        for (let hour = 1; hour < 24; hour++) {
            const prevHour = hour - 1;
            const currentManagers = hourlyManagers[hour].map(p => p.id);
            const prevManagers = hourlyManagers[prevHour].map(p => p.id);

            const managersOff = hourlyManagers[prevHour].filter(p => !currentManagers.includes(p.id));
            const managersOn = hourlyManagers[hour].filter(p => !prevManagers.includes(p.id));

            if (managersOff.length > 0 || managersOn.length > 0) {
                hasChanges = true;
                const hourChange = document.createElement('div');
                hourChange.className = 'hour-change';
                
                let content = `<div class="hour-title">${hour.toString().padStart(2, '0')}:00 교체</div>`;
                
                if (managersOff.length > 0) {
                    content += `
                        <div class="change-section">
                            <div class="change-label off">해제 ${managersOff.length}명</div>
                            <div class="manager-list">`;
                    managersOff.forEach(manager => {
                        const personIndex = people.findIndex(p => p.id === manager.id);
                        content += `<span class="manager-tag off" style="background-color: ${colors[personIndex]}">${manager.id} ${manager.name}</span>`;
                    });
                    content += `</div></div>`;
                }
                
                if (managersOn.length > 0) {
                    content += `
                        <div class="change-section">
                            <div class="change-label on">설정 ${managersOn.length}명</div>
                            <div class="manager-list">`;
                    managersOn.forEach(manager => {
                        const personIndex = people.findIndex(p => p.id === manager.id);
                        content += `<span class="manager-tag on" style="background-color: ${colors[personIndex]}">${manager.id} ${manager.name}</span>`;
                    });
                    content += `</div></div>`;
                }
                
                hourChange.innerHTML = content;
                changesGrid.appendChild(hourChange);
            }
        }

        if (!hasChanges) {
            changesGrid.innerHTML = '<div class="no-changes">관리자 교체가 필요한 시간대가 없습니다.</div>';
        }
    }

    function saveToLocalStorage() {
        if (dataSource === 'shared') return; // 공유 데이터 모드에서는 로컬 저장 안 함
        
        try {
            const dataWithTimestamp = {
                scheduleData: scheduleData,
                timestamp: new Date().toISOString(),
                peopleCount: people.length
            };
            localStorage.setItem('scheduleManager', JSON.stringify(dataWithTimestamp));
            
            const status = document.getElementById('auto-save-status');
            status.textContent = `자동저장 완료 (${new Date().toLocaleTimeString()})`;
            status.style.background = '#dcfce7';
        } catch (error) {
            console.error('저장 실패:', error);
            const status = document.getElementById('auto-save-status');
            status.textContent = '저장 실패';
            status.style.background = '#fecaca';
        }
    }

    function loadFromLocalStorage() {
        try {
            const saved = localStorage.getItem('scheduleManager');
            if (saved) {
                const data = JSON.parse(saved);
                scheduleData = data.scheduleData || {};
                dataSource = 'local';
                
                updateScheduleUI();
                
                const status = document.getElementById('auto-save-status');
                status.textContent = `복원 완료 (${new Date(data.timestamp).toLocaleString()})`;
            }
            
            // 이전에 사용한 공유 URL이 있는지 확인
            const savedURL = localStorage.getItem('sharedDataURL');
            if (savedURL) {
                document.getElementById('json-url').value = savedURL;
            }
        } catch (error) {
            console.error('불러오기 실패:', error);
            scheduleData = {};
            dataSource = 'local';
        }
    }

    function updateScheduleUI() {
        const cells = document.querySelectorAll('.time-cell');
        cells.forEach(cell => {
            cell.classList.remove('selected');
            cell.style.backgroundColor = '';
        });

        Object.keys(scheduleData).forEach(personId => {
            const personIndex = people.findIndex(p => p.id === personId);
            if (personIndex >= 0 && scheduleData[personId]) {
                scheduleData[personId].forEach(hour => {
                    const cell = document.querySelector(`[data-person-id="${personId}"][data-hour="${hour}"]`);
                    if (cell) {
                        cell.classList.add('selected');
                        cell.style.backgroundColor = colors[personIndex];
                    }
                });
            }
        });
    }

    function backupData() {
        const backupData = {
            scheduleData: scheduleData,
            people: people,
            timestamp: new Date().toISOString(),
            version: "1.0",
            dataSource: dataSource
        };
        
        const dataStr = JSON.stringify(backupData, null, 2);
        const dataBlob = new Blob([dataStr], {type: 'application/json'});
        const url = URL.createObjectURL(dataBlob);
        
        const link = document.createElement('a');
        link.href = url;
        link.download = `schedule_backup_${new Date().toISOString().split('T')[0]}.json`;
        link.click();
        
        URL.revokeObjectURL(url);
        
        const status = document.getElementById('auto-save-status');
        const originalText = status.textContent;
        status.textContent = '백업 다운로드 완료!';
        status.style.background = '#dbeafe';
        setTimeout(() => {
            status.textContent = originalText;
            status.style.background = '#dcfce7';
        }, 2000);
    }

    function restoreData(event) {
        const file = event.target.files[0];
        if (!file) return;
        
        const reader = new FileReader();
        reader.onload = function(e) {
            try {
                const backupData = JSON.parse(e.target.result);
                
                if (!backupData.scheduleData) {
                    throw new Error('잘못된 백업 파일입니다.');
                }
                
                scheduleData = backupData.scheduleData;
                dataSource = 'local'; // 복원된 데이터는 로컬로 처리
                
                updateScheduleUI();
                updateStats();
                updateManagerChanges();
                updateDataSourceStatus();
                
                saveToLocalStorage();
                
                const status = document.getElementById('auto-save-status');
                status.textContent = `복원 완료 (${new Date(backupData.timestamp).toLocaleString()})`;
                status.style.background = '#dbeafe';
                
                alert('백업이 성공적으로 복원되었습니다!');
                
            } catch (error) {
                console.error('복원 실패:', error);
                alert('백업 파일 복원에 실패했습니다. 파일을 확인해주세요.');
            }
        };
        reader.readAsText(file);
        
        event.target.value = '';
    }

    // 초기화 실행
    init();
    startAutoRefresh();

    // 전역 함수로 만들어서 HTML에서 호출 가능하도록
    window.loadSharedData = loadSharedData;
    window.closeSharedPanel = closeSharedPanel;
    window.loadFromURL = loadFromURL;
    window.saveCurrentAsShared = saveCurrentAsShared;
    window.backupData = backupData;
    window.restoreData = restoreData;
}