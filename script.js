function showView(view) {
    document.getElementById('servers-view').style.display = (view === 'servers') ? 'block' : 'none';
    document.getElementById('details-view').style.display = (view === 'details') ? 'block' : 'none';
}

function selectServer(serverName) {
    document.getElementById('selected-server-name').innerText = "مراقبة نشاط: " + serverName;
    showView('details');
    // هنا يتم جلب البيانات الخاصة بالسيرفر المختار من قاعدة البيانات المركزية
}
