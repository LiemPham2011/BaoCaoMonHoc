let BTN_Bui = document.querySelector('#chartBui');
let BTN_Khoi = document.querySelector('#chartKhoi');
let BTN_Doam = document.querySelector('#chartDoam');
let BTN_Nhietdo = document.querySelector('#chartNhietdo');



BTN_Khoi.addEventListener('click',()=>{
    var phongNguRef_4= firebase.database().ref('PhongNgu').child('Khoi');
    var phongKhachRef_4 = firebase.database().ref('PhongKhach').child('Khoi');
    var phongBepRef_4 = firebase.database().ref('PhongBep').child('Khoi');
    var phongKhoRef_4 = firebase.database().ref('PhongKho').child('Khoi');
    chartContainer.style.display = 'block';
    phongNguRef_4.once('value', function(snapshot) {
        khoiPhongNgu = snapshot.val();
        console.log(nhietdoPhongNgu);
            phongKhachRef_4.once('value', function(snapshot) {
                khoiPhongKhach = snapshot.val();
            phongBepRef_4.once('value', function(snapshot) {
                khoiPhongBep = snapshot.val();
            phongKhoRef_4.once('value', function(snapshot) {
                khoiPhongKho = snapshot.val();

                

new Chart("Khoi", {
    type: "bar",
        data: {
            labels: ['Khói'],
            datasets: [{
                label: 'Phòng Khách',
                data: [khoiPhongKhach],
                backgroundColor: "rgba(255, 99, 132, 0.6)",
                fill: false
            }, {
                label: 'Phòng Ngủ',
                data: [khoiPhongKhach],
                backgroundColor: "rgba(54, 162, 235, 0.6)",
                fill: false
            }, {
                label: 'Phòng Bếp',
                data: [khoiPhongBep],
                backgroundColor: "rgba(75, 192, 192, 0.6)",
                fill: false
            }, {
                label: 'Phòng Kho',
                data: [khoiPhongKho],
                backgroundColor: "rgba(255, 206, 86, 0.6)",
                fill: false
            }]
        },
    options:{
        title:{
        display:true,
        text:'Nồng độ khói',
        fontSize:25
        },
        legend:{
        display: true,
        position:'right',
        labels:{
            fontColor:'#000'
        }
        },
        layout:{
        padding:{
            left:50,
            right:0,
            bottom:0,
            top:0
        }
        },
        tooltips:{
        enabled:true
        }
  }
                    });
                });
            });
        });
    });
});

BTN_Nhietdo.addEventListener('click', function () {
    // Lấy tham chiếu đến canvas và div chứa nó
          var phongNguRef = firebase.database().ref('PhongNgu').child('Nhietdo');
          var phongKhachRef = firebase.database().ref('PhongKhach').child('Nhietdo');
          var phongBepRef = firebase.database().ref('PhongBep').child('Nhietdo');
          var phongKhoRef = firebase.database().ref('PhongKho').child('Nhietdo');
          chartContainer.style.display = 'block';
          phongNguRef.once('value', function(snapshot) {
              nhietdoPhongNgu = snapshot.val();
              
                  phongKhachRef.once('value', function(snapshot) {
                      nhietdoPhongKhach = snapshot.val();
                    
                  phongBepRef.once('value', function(snapshot) {
                      nhietdoPhongBep = snapshot.val();
                      
                  phongKhoRef.once('value', function(snapshot) {
                      nhietdoPhongKho = snapshot.val();
                      
      
                      const xValues = [1];
      
      new Chart("Nhietdo", {
          type: "bar",
              data: {
                  labels: xValues,
                  datasets: [{
                      label: 'Phòng Khách',
                      data: [nhietdoPhongKhach],
                      backgroundColor: "rgba(255, 99, 132, 0.6)",
                      fill: false
                  }, {
                      label: 'Phòng Ngủ',
                      data: [nhietdoPhongNgu],
                      backgroundColor: "rgba(54, 162, 235, 0.6)",
                      fill: false
                  }, {
                      label: 'Phòng Bếp',
                      data: [nhietdoPhongBep],
                      backgroundColor: "rgba(75, 192, 192, 0.6)",
                      fill: false
                  }, {
      label: 'Phòng Kho',
                      data: [nhietdoPhongKho],
                      backgroundColor: "rgba(255, 206, 86, 0.6)",
                      fill: false
                  }]
              },
          options:{
              title:{
              display:true,
              text:'Nhiệt độ',
              fontSize:25
              },
              legend:{
              display: true,
              position:'right',
              labels:{
                  fontColor:'#000'
              }
              },
              layout:{
              padding:{
                  left:50,
                  right:0,
                  bottom:0,
                  top:0
              }
              },
              tooltips:{
              enabled:true
              }
        }
          });
                  });
              });
          });
      });
});


BTN_Doam.addEventListener('click',function(){
        var phongNguRef_2= firebase.database().ref('PhongNgu').child('Doam');
          var phongKhachRef_2 = firebase.database().ref('PhongKhach').child('Doam');
          var phongBepRef_2 = firebase.database().ref('PhongBep').child('Doam');
          var phongKhoRef_2 = firebase.database().ref('PhongKho').child('Doam');
          chartContainer.style.display = 'block';
          phongNguRef_2.once('value', function(snapshot) {
              doamPhongNgu = snapshot.val();
                  phongKhachRef_2.once('value', function(snapshot) {
                      doamPhongKhach = snapshot.val();
                  phongBepRef_2.once('value', function(snapshot) {
                      doamPhongBep = snapshot.val();
                  phongKhoRef_2.once('value', function(snapshot) {
                      doamPhongKho = snapshot.val();
      
                      const xValues = [1];
      
      new Chart("DoAm", {
          type: "bar",
              data: {
                  labels: xValues,
                  datasets: [{
                      label: 'Phòng Khách',
                      data: [doamPhongKhach],
                      backgroundColor: "rgba(255, 99, 132, 0.6)",
                      fill: false
                  }, {
                      label: 'Phòng Ngủ',
                      data: [doamPhongNgu],
                      backgroundColor: "rgba(54, 162, 235, 0.6)",
                      fill: false
                  }, {
                      label: 'Phòng Bếp',
                      data: [doamPhongBep],
                      backgroundColor: "rgba(75, 192, 192, 0.6)",
                      fill: false
                  }, {
                      label: 'Phòng Kho',
                      data: [doamPhongKho],
                      backgroundColor: "rgba(255, 206, 86, 0.6)",
                      fill: false
                  }]
              },
          options:{
              title:{
              display:true,
              text:'Độ ẩm',
              fontSize:25
              },
              legend:{
              display: true,
              position:'right',
              labels:{
                  fontColor:'#000'
              }
              },
              layout:{
              padding:{
                  left:50,
                  right:0,
                  bottom:0,
                  top:0
              }
              },
              tooltips:{
              enabled:true
              }
        }
          });
                  });
              });
          });
      });
    });


BTN_Bui.addEventListener('click',()=>{
    var phongNguRef_3= firebase.database().ref('PhongNgu').child('Bui');
    var phongKhachRef_3 = firebase.database().ref('PhongKhach').child('Bui');
    var phongBepRef_3 = firebase.database().ref('PhongBep').child('Bui');
    var phongKhoRef_3 = firebase.database().ref('PhongKho').child('Bui');

    phongNguRef_3.once('value', function(snapshot) {
        buiPhongNgu = snapshot.val();
        console.log(nhietdoPhongNgu);
            phongKhachRef_3.once('value', function(snapshot) {
                buiPhongKhach = snapshot.val();
                console.log(nhietdoPhongKhach);
            phongBepRef_3.once('value', function(snapshot) {
                buiPhongBep = snapshot.val();
                console.log(nhietdoPhongBep);
            phongKhoRef_3.once('value', function(snapshot) {
                buiPhongKho = snapshot.val();
                console.log(nhietdoPhongKho);

                const xValues = [1, 2, 3, 4, 5];

new Chart("Bui", {
    type: "bar",
        data: {
            labels: xValues,
            datasets: [{
                label: 'Phòng Khách',
                data: [buiPhongKhach],
                backgroundColor: "rgba(255, 99, 132, 0.6)",
                fill: false
            }, {
                label: 'Phòng Ngủ',
                data: [buiPhongNgu],
                backgroundColor: "rgba(54, 162, 235, 0.6)",
                fill: false
            }, {
                label: 'Phòng Bếp',
                data: [buiPhongBep],
                backgroundColor: "rgba(75, 192, 192, 0.6)",
                fill: false
            }, {
                label: 'Phòng Kho',
                data: [buiPhongKho],
                backgroundColor: "rgba(255, 206, 86, 0.6)",
                fill: false
            }]
        },
    options:{
        title:{
        display:true,
        text:'Nồng độ bụi',
        fontSize:25
        },
        legend:{
        display: true,
        position:'right',
        labels:{
            fontColor:'#000'
        }
        },
        layout:{
        padding:{
            left:50,
            right:0,
            bottom:0,
            top:0
        }
        },
        tooltips:{
        enabled:true
        }
  }
                    });
                });
            });
        });
    });
});
