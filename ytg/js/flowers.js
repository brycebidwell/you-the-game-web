// JavaScript Document
// This document contains canvas renderings of my flower themed weather illustrations. 
// Reproduction or commercial use forbidden without permission. (C) Bryce Bidwell, 2015-05-01
// 1) Sunny
// 2) Partly cloudy
// 3) Cloudy
// 4) Raining
// 5) Thunderstorms
// 6) Snowing
// 7) Snowstorms
// 8) Windy
// 9) Raining cats and dogs

// 1) Sunny
	function draw1(ctx) {

      // layer1/Clip Group
      ctx.save();

      // layer1/Clip Group/Clipping Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(1500.1, 1080.0);
      ctx.lineTo(420.1, 1080.0);
      ctx.lineTo(420.1, 0.0);
      ctx.lineTo(1500.1, 0.0);
      ctx.lineTo(1500.1, 1080.0);
      ctx.closePath();
      ctx.clip();

      // layer1/Clip Group/Group

      // layer1/Clip Group/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(977.2, 641.7);
      ctx.lineTo(930.4, 641.7);
      ctx.bezierCurveTo(939.2, 831.8, 929.1, 882.4, 923.0, 1034.0);
      ctx.bezierCurveTo(923.0, 1034.0, 948.8, 1073.1, 969.5, 1044.7);
      ctx.bezierCurveTo(975.9, 887.7, 986.3, 837.1, 977.2, 640.5);
      ctx.fillStyle = "rgb(128, 130, 132)";
      ctx.fill();
      ctx.lineWidth = 7.5;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.stroke();

      // layer1/Clip Group/Path
      ctx.restore();
      ctx.beginPath();
      ctx.moveTo(996.4, 554.3);
      ctx.bezierCurveTo(1012.3, 553.8, 1030.6, 553.3, 1042.4, 565.8);
      ctx.bezierCurveTo(1053.1, 577.2, 1054.9, 595.6, 1048.6, 609.6);
      ctx.bezierCurveTo(1042.8, 622.5, 1030.0, 630.1, 1015.9, 628.9);
      ctx.bezierCurveTo(1004.1, 627.9, 992.9, 621.5, 985.7, 612.3);
      ctx.bezierCurveTo(979.5, 604.3, 976.9, 594.6, 975.0, 584.9);
      ctx.bezierCurveTo(974.8, 583.7, 974.5, 582.5, 974.3, 581.4);
      ctx.fillStyle = "rgb(128, 130, 132)";
      ctx.fill();
      ctx.lineWidth = 7.5;
      ctx.lineJoin = "round";
      ctx.stroke();

      // layer1/Clip Group/Path
      ctx.beginPath();
      ctx.moveTo(910.3, 554.3);
      ctx.bezierCurveTo(894.4, 553.8, 876.2, 553.3, 864.4, 565.8);
      ctx.bezierCurveTo(853.6, 577.2, 851.9, 595.6, 858.2, 609.6);
      ctx.bezierCurveTo(864.0, 622.5, 876.7, 630.1, 890.9, 628.9);
      ctx.bezierCurveTo(902.6, 627.9, 913.8, 621.5, 921.1, 612.3);
      ctx.bezierCurveTo(928.0, 603.4, 931.6, 593.2, 933.6, 582.4);
      ctx.fill();
      ctx.stroke();

      // layer1/Clip Group/Path
      ctx.beginPath();
      ctx.moveTo(996.4, 523.8);
      ctx.bezierCurveTo(1012.3, 524.3, 1030.6, 524.8, 1042.4, 512.3);
      ctx.bezierCurveTo(1053.1, 500.8, 1054.9, 482.5, 1048.6, 468.5);
      ctx.bezierCurveTo(1042.8, 455.6, 1030.0, 447.9, 1015.9, 449.1);
      ctx.bezierCurveTo(1004.1, 450.1, 992.9, 456.5, 985.7, 465.8);
      ctx.bezierCurveTo(979.5, 473.7, 976.9, 483.5, 975.0, 493.2);
      ctx.bezierCurveTo(974.8, 494.4, 974.5, 495.5, 974.3, 496.7);
      ctx.fill();
      ctx.stroke();

      // layer1/Clip Group/Path
      ctx.beginPath();
      ctx.moveTo(910.3, 523.8);
      ctx.bezierCurveTo(894.4, 524.3, 876.2, 524.8, 864.4, 512.3);
      ctx.bezierCurveTo(853.6, 500.8, 851.9, 482.5, 858.2, 468.5);
      ctx.bezierCurveTo(864.0, 455.6, 876.7, 447.9, 890.9, 449.1);
      ctx.bezierCurveTo(902.6, 450.1, 913.8, 456.5, 921.1, 465.8);
      ctx.bezierCurveTo(928.0, 474.7, 932.5, 485.8, 934.5, 496.7);
      ctx.fill();
      ctx.stroke();

      // layer1/Clip Group/Path
      ctx.beginPath();
      ctx.moveTo(934.5, 579.7);
      ctx.bezierCurveTo(925.3, 590.1, 916.4, 602.8, 914.5, 617.1);
      ctx.bezierCurveTo(912.8, 630.6, 919.9, 643.3, 930.9, 650.8);
      ctx.bezierCurveTo(954.4, 667.0, 993.1, 654.9, 994.2, 625.0);
      ctx.bezierCurveTo(994.8, 609.3, 981.9, 593.0, 974.6, 579.7);
      ctx.fillStyle = "rgb(0, 0, 0)";
      ctx.fill();
      ctx.stroke();

      // layer1/Clip Group/Path
      ctx.beginPath();
      ctx.moveTo(934.5, 497.6);
      ctx.bezierCurveTo(925.3, 487.3, 916.4, 474.6, 914.5, 460.2);
      ctx.bezierCurveTo(912.8, 446.7, 919.9, 434.0, 930.9, 426.5);
      ctx.bezierCurveTo(954.4, 410.3, 993.1, 422.4, 994.2, 452.3);
      ctx.bezierCurveTo(994.8, 468.0, 981.9, 484.3, 974.6, 497.6);
      ctx.fill();
      ctx.stroke();

      // layer1/Clip Group/Path
      ctx.beginPath();
      ctx.moveTo(910.5, 556.3);
      ctx.bezierCurveTo(891.3, 571.2, 865.5, 576.7, 846.8, 555.7);
      ctx.bezierCurveTo(828.4, 535.0, 840.9, 504.2, 868.5, 502.1);
      ctx.bezierCurveTo(884.2, 500.9, 899.5, 508.9, 912.7, 516.4);
      ctx.fill();
      ctx.stroke();

      // layer1/Clip Group/Path
      ctx.beginPath();
      ctx.moveTo(994.9, 556.3);
      ctx.bezierCurveTo(1014.1, 571.2, 1039.9, 576.7, 1058.6, 555.7);
      ctx.bezierCurveTo(1077.0, 535.0, 1064.5, 504.2, 1036.9, 502.1);
      ctx.bezierCurveTo(1021.2, 500.9, 1005.9, 508.9, 992.7, 516.4);
      ctx.fill();
      ctx.stroke();

      // layer1/Clip Group/Path
      ctx.beginPath();
      ctx.moveTo(1000.5, 538.7);
      ctx.bezierCurveTo(1000.5, 565.0, 979.1, 586.4, 952.7, 586.4);
      ctx.bezierCurveTo(926.4, 586.4, 905.0, 565.0, 905.0, 538.7);
      ctx.bezierCurveTo(905.0, 512.3, 926.4, 490.9, 952.7, 490.9);
      ctx.bezierCurveTo(979.1, 490.9, 1000.5, 512.3, 1000.5, 538.7);
      ctx.closePath();
      ctx.fillStyle = "rgb(187, 189, 192)";
      ctx.fill();
      ctx.lineCap = "round";
      ctx.stroke();

      // layer1/Clip Group/Path
      ctx.beginPath();
      ctx.moveTo(1284.1, 134.8);
      ctx.lineTo(1284.1, 31.1);
      ctx.lineTo(1324.8, 31.1);
      ctx.lineTo(1304.9, 31.1);
      ctx.lineTo(1324.8, 31.1);
      ctx.lineTo(1324.8, 134.8);
      ctx.lineTo(1284.1, 134.8);
      ctx.closePath();
      ctx.fillStyle = "rgb(209, 210, 212)";
      ctx.fill();
      ctx.stroke();

      // layer1/Clip Group/Path
      ctx.beginPath();
      ctx.moveTo(1324.8, 270.4);
      ctx.lineTo(1324.8, 374.2);
      ctx.lineTo(1284.1, 374.2);
      ctx.lineTo(1304.0, 374.2);
      ctx.lineTo(1284.1, 374.2);
      ctx.lineTo(1284.1, 270.4);
      ctx.fill();
      ctx.stroke();

      // layer1/Clip Group/Path
      ctx.beginPath();
      ctx.moveTo(1371.9, 182.5);
      ctx.lineTo(1475.6, 182.5);
      ctx.lineTo(1475.6, 223.1);
      ctx.lineTo(1475.6, 203.2);
      ctx.lineTo(1475.6, 223.1);
      ctx.lineTo(1371.9, 223.1);
      ctx.fill();
      ctx.stroke();

      // layer1/Clip Group/Path
      ctx.beginPath();
      ctx.moveTo(1236.3, 223.1);
      ctx.lineTo(1132.6, 223.1);
      ctx.lineTo(1132.6, 182.5);
      ctx.lineTo(1236.3, 182.5);
      ctx.fill();
      ctx.stroke();

      // layer1/Clip Group/Path
      ctx.beginPath();
      ctx.moveTo(1269.9, 263.6);
      ctx.lineTo(1196.6, 337.0);
      ctx.lineTo(1167.8, 308.3);
      ctx.lineTo(1181.9, 322.3);
      ctx.lineTo(1167.8, 308.3);
      ctx.lineTo(1241.2, 234.9);
      ctx.fillStyle = "rgb(230, 231, 232)";
      ctx.fill();
      ctx.stroke();

      // layer1/Clip Group/Path
      ctx.beginPath();
      ctx.moveTo(1336.8, 139.7);
      ctx.lineTo(1410.2, 66.3);
      ctx.lineTo(1438.9, 95.1);
      ctx.lineTo(1424.9, 81.0);
      ctx.lineTo(1438.9, 95.1);
      ctx.lineTo(1365.5, 168.4);
      ctx.fill();
      ctx.stroke();

      // layer1/Clip Group/Path
      ctx.beginPath();
      ctx.moveTo(1271.4, 139.0);
      ctx.lineTo(1198.1, 65.6);
      ctx.lineTo(1169.3, 94.4);
      ctx.lineTo(1183.4, 80.3);
      ctx.lineTo(1169.3, 94.4);
      ctx.lineTo(1242.7, 167.7);
      ctx.fill();
      ctx.stroke();

      // layer1/Clip Group/Path
      ctx.beginPath();
      ctx.moveTo(1339.8, 265.0);
      ctx.lineTo(1413.2, 338.3);
      ctx.lineTo(1441.9, 309.6);
      ctx.lineTo(1427.9, 323.6);
      ctx.lineTo(1441.9, 309.6);
      ctx.lineTo(1368.6, 236.3);
      ctx.fill();
      ctx.stroke();

      // layer1/Clip Group/Path
      ctx.beginPath();
      ctx.moveTo(1377.8, 202.8);
      ctx.bezierCurveTo(1377.8, 243.6, 1344.8, 276.6, 1304.0, 276.6);
      ctx.bezierCurveTo(1263.2, 276.6, 1230.1, 243.6, 1230.1, 202.8);
      ctx.bezierCurveTo(1230.1, 162.0, 1263.2, 128.9, 1304.0, 128.9);
      ctx.bezierCurveTo(1344.8, 128.9, 1377.8, 162.0, 1377.8, 202.8);
      ctx.closePath();
      ctx.fillStyle = "rgb(187, 189, 192)";
      ctx.fill();
      ctx.stroke();

      // layer1/Clip Group/Path
      ctx.beginPath();
      ctx.moveTo(1110.1, 340.1);
      ctx.lineTo(1049.1, 401.1);
      ctx.lineWidth = 11.3;
      ctx.stroke();

      // layer1/Clip Group/Path
      ctx.beginPath();
      ctx.moveTo(1160.7, 362.0);
      ctx.lineTo(1104.4, 418.4);
      ctx.stroke();

      // layer1/Clip Group/Path
      ctx.beginPath();
      ctx.moveTo(1187.6, 418.4);
      ctx.lineTo(1114.8, 491.2);
      ctx.stroke();

      // layer1/Group
      ctx.restore();

      // layer1/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(1920.3, 1080.2);
      ctx.lineTo(0.0, 1080.2);
      ctx.bezierCurveTo(0.0, 1040.8, 0.1, 913.2, 0.1, 913.2);
      ctx.bezierCurveTo(0.1, 913.2, 4.3, 914.4, 14.9, 909.9);
      ctx.bezierCurveTo(49.3, 895.2, 77.3, 899.3, 111.6, 909.5);
      ctx.bezierCurveTo(148.1, 920.4, 185.4, 928.9, 222.6, 937.5);
      ctx.bezierCurveTo(277.8, 950.2, 333.7, 961.0, 390.5, 962.4);
      ctx.bezierCurveTo(398.8, 962.6, 407.1, 962.6, 415.4, 962.5);
      ctx.bezierCurveTo(520.7, 960.2, 622.9, 928.6, 727.7, 919.8);
      ctx.bezierCurveTo(854.4, 909.2, 981.1, 927.2, 1106.4, 944.6);
      ctx.bezierCurveTo(1277.2, 968.3, 1450.7, 970.3, 1622.7, 961.3);
      ctx.bezierCurveTo(1717.6, 956.4, 1827.0, 930.7, 1920.1, 956.8);
      ctx.fill();
      ctx.restore();
      ctx.restore();
    }
 
// 2) Partly cloudy
	function draw2(ctx) {

      // layer1/Group
      ctx.save();

      // layer1/Group/Clip Group
      ctx.save();

      // layer1/Group/Clip Group/Clipping Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(1500.1, 1080.0);
      ctx.lineTo(420.1, 1080.0);
      ctx.lineTo(420.1, 0.0);
      ctx.lineTo(1500.1, 0.0);
      ctx.lineTo(1500.1, 1080.0);
      ctx.closePath();
      ctx.clip();

      // layer1/Group/Clip Group/Path
      ctx.beginPath();
      ctx.moveTo(970.2, 1000.5);
      ctx.bezierCurveTo(972.5, 905.3, 971.6, 854.9, 995.7, 752.3);
      ctx.bezierCurveTo(1001.0, 729.7, 1006.5, 707.1, 1010.6, 684.2);
      ctx.bezierCurveTo(1013.2, 669.7, 1015.0, 655.2, 1015.2, 640.5);
      ctx.lineTo(968.2, 640.5);
      ctx.bezierCurveTo(968.0, 655.2, 966.2, 669.7, 963.6, 684.2);
      ctx.bezierCurveTo(959.5, 707.1, 954.0, 729.7, 948.7, 752.3);
      ctx.bezierCurveTo(924.6, 854.9, 925.5, 905.3, 923.2, 1000.5);
      ctx.fillStyle = "rgb(128, 130, 132)";
      ctx.fill();
      ctx.lineWidth = 7.5;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.stroke();

      // layer1/Group/Clip Group/Path
      ctx.beginPath();
      ctx.moveTo(950.1, 374.0);
      ctx.bezierCurveTo(938.8, 379.5, 926.1, 382.7, 912.8, 382.7);
      ctx.bezierCurveTo(888.1, 382.7, 866.0, 372.1, 850.5, 355.3);
      ctx.bezierCurveTo(845.4, 356.7, 840.2, 357.7, 834.7, 357.7);
      ctx.bezierCurveTo(803.4, 357.7, 778.1, 332.7, 777.3, 301.6);
      ctx.bezierCurveTo(744.8, 301.6, 718.4, 275.3, 718.4, 242.8);
      ctx.bezierCurveTo(718.4, 223.3, 728.1, 206.1, 742.7, 195.4);
      ctx.bezierCurveTo(731.2, 185.8, 723.7, 171.6, 723.7, 155.5);
      ctx.bezierCurveTo(723.7, 126.7, 747.1, 103.3, 775.9, 103.3);
      ctx.bezierCurveTo(791.9, 103.3, 806.1, 110.7, 815.7, 122.2);
      ctx.bezierCurveTo(822.1, 118.4, 829.5, 116.1, 837.5, 116.1);
      ctx.bezierCurveTo(852.0, 116.1, 864.7, 123.2, 872.7, 133.9);
      ctx.bezierCurveTo(871.8, 132.6, 878.9, 124.9, 879.6, 124.1);
      ctx.bezierCurveTo(892.6, 110.7, 914.2, 108.7, 930.6, 116.7);
      ctx.bezierCurveTo(934.8, 118.7, 939.2, 121.9, 942.3, 125.4);
      ctx.bezierCurveTo(945.7, 129.2, 947.8, 134.0, 949.8, 138.7);
      ctx.lineTo(950.1, 374.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(230, 231, 232)";
      ctx.fill();
      ctx.stroke();

      // layer1/Group/Clip Group/Path
      ctx.beginPath();
      ctx.moveTo(970.5, 374.2);
      ctx.lineTo(970.5, 31.1);
      ctx.lineTo(949.7, 31.1);
      ctx.lineTo(949.7, 374.2);
      ctx.lineTo(970.5, 374.2);
      ctx.closePath();
      ctx.fillStyle = "rgb(209, 210, 212)";
      ctx.fill();
      ctx.stroke();

      // layer1/Group/Clip Group/Path
      ctx.beginPath();
      ctx.moveTo(1030.9, 554.3);
      ctx.bezierCurveTo(1046.8, 553.8, 1065.1, 553.2, 1076.9, 565.8);
      ctx.bezierCurveTo(1087.6, 577.2, 1089.4, 595.6, 1083.1, 609.6);
      ctx.bezierCurveTo(1077.3, 622.5, 1064.5, 630.1, 1050.4, 628.9);
      ctx.bezierCurveTo(1038.6, 627.9, 1027.4, 621.5, 1020.2, 612.3);
      ctx.bezierCurveTo(1014.0, 604.3, 1011.3, 594.6, 1009.5, 584.9);
      ctx.bezierCurveTo(1009.3, 583.7, 1009.0, 582.5, 1008.8, 581.4);
      ctx.fillStyle = "rgb(128, 130, 132)";
      ctx.fill();
      ctx.lineCap = "butt";
      ctx.stroke();

      // layer1/Group/Clip Group/Path
      ctx.beginPath();
      ctx.moveTo(944.8, 554.3);
      ctx.bezierCurveTo(928.9, 553.8, 910.7, 553.2, 898.9, 565.8);
      ctx.bezierCurveTo(888.1, 577.2, 886.4, 595.6, 892.7, 609.6);
      ctx.bezierCurveTo(898.5, 622.5, 911.2, 630.1, 925.4, 628.9);
      ctx.bezierCurveTo(937.1, 627.9, 948.3, 621.5, 955.6, 612.3);
      ctx.bezierCurveTo(962.5, 603.4, 966.1, 593.2, 968.1, 582.4);
      ctx.fill();
      ctx.stroke();

      // layer1/Group/Clip Group/Path
      ctx.beginPath();
      ctx.moveTo(1030.9, 523.8);
      ctx.bezierCurveTo(1046.8, 524.3, 1065.1, 524.8, 1076.9, 512.3);
      ctx.bezierCurveTo(1087.6, 500.8, 1089.4, 482.5, 1083.1, 468.5);
      ctx.bezierCurveTo(1077.3, 455.6, 1064.5, 447.9, 1050.4, 449.2);
      ctx.bezierCurveTo(1038.6, 450.1, 1027.4, 456.5, 1020.2, 465.8);
      ctx.bezierCurveTo(1014.0, 473.7, 1011.3, 483.5, 1009.5, 493.2);
      ctx.bezierCurveTo(1009.3, 494.4, 1009.0, 495.5, 1008.8, 496.7);
      ctx.fill();
      ctx.stroke();

      // layer1/Group/Clip Group/Path
      ctx.beginPath();
      ctx.moveTo(944.8, 523.8);
      ctx.bezierCurveTo(928.9, 524.3, 910.7, 524.8, 898.9, 512.3);
      ctx.bezierCurveTo(888.1, 500.8, 886.4, 482.5, 892.7, 468.5);
      ctx.bezierCurveTo(898.5, 455.6, 911.2, 447.9, 925.4, 449.2);
      ctx.bezierCurveTo(937.1, 450.1, 948.3, 456.5, 955.6, 465.8);
      ctx.bezierCurveTo(962.5, 474.7, 967.0, 485.8, 969.0, 496.7);
      ctx.fill();
      ctx.stroke();

      // layer1/Group/Clip Group/Path
      ctx.beginPath();
      ctx.moveTo(987.2, 586.9);
      ctx.lineCap = "round";
      ctx.stroke();

      // layer1/Group/Clip Group/Path
      ctx.beginPath();
      ctx.moveTo(969.0, 579.7);
      ctx.bezierCurveTo(959.8, 590.1, 950.9, 602.8, 949.0, 617.1);
      ctx.bezierCurveTo(947.2, 630.6, 954.4, 643.3, 965.3, 650.8);
      ctx.bezierCurveTo(988.9, 667.0, 1027.6, 654.9, 1028.7, 625.0);
      ctx.bezierCurveTo(1029.3, 609.3, 1016.3, 593.0, 1009.0, 579.7);
      ctx.fillStyle = "rgb(0, 0, 0)";
      ctx.fill();
      ctx.lineCap = "butt";
      ctx.stroke();

      // layer1/Group/Clip Group/Path
      ctx.beginPath();
      ctx.moveTo(969.0, 497.6);
      ctx.bezierCurveTo(959.8, 487.3, 950.9, 474.6, 949.0, 460.2);
      ctx.bezierCurveTo(947.2, 446.7, 954.4, 434.0, 965.3, 426.5);
      ctx.bezierCurveTo(988.9, 410.3, 1027.6, 422.4, 1028.7, 452.3);
      ctx.bezierCurveTo(1029.3, 468.0, 1016.3, 484.3, 1009.0, 497.6);
      ctx.fill();
      ctx.stroke();

      // layer1/Group/Clip Group/Path
      ctx.beginPath();
      ctx.moveTo(945.0, 556.3);
      ctx.bezierCurveTo(925.8, 571.2, 900.0, 576.7, 881.3, 555.7);
      ctx.bezierCurveTo(862.9, 535.0, 875.4, 504.2, 903.0, 502.1);
      ctx.bezierCurveTo(918.7, 500.9, 934.0, 508.9, 947.2, 516.4);
      ctx.fill();
      ctx.stroke();

      // layer1/Group/Clip Group/Path
      ctx.beginPath();
      ctx.moveTo(1029.4, 556.3);
      ctx.bezierCurveTo(1048.6, 571.2, 1074.4, 576.7, 1093.1, 555.7);
      ctx.bezierCurveTo(1111.5, 535.0, 1099.0, 504.2, 1071.4, 502.1);
      ctx.bezierCurveTo(1055.7, 500.9, 1040.4, 508.9, 1027.2, 516.4);
      ctx.fill();
      ctx.stroke();

      // layer1/Group/Clip Group/Path
      ctx.beginPath();
      ctx.moveTo(1034.9, 538.7);
      ctx.bezierCurveTo(1034.9, 565.0, 1013.6, 586.4, 987.2, 586.4);
      ctx.bezierCurveTo(960.9, 586.4, 939.5, 565.0, 939.5, 538.7);
      ctx.bezierCurveTo(939.5, 512.3, 960.9, 490.9, 987.2, 490.9);
      ctx.bezierCurveTo(1013.6, 490.9, 1034.9, 512.3, 1034.9, 538.7);
      ctx.closePath();
      ctx.fillStyle = "rgb(187, 189, 192)";
      ctx.fill();
      ctx.lineCap = "round";
      ctx.stroke();

      // layer1/Group/Clip Group/Path
      ctx.beginPath();
      ctx.moveTo(1106.1, 1142.8);
      ctx.strokeStyle = "rgb(239, 64, 54)";
      ctx.stroke();

      // layer1/Group/Clip Group/Path
      ctx.beginPath();
      ctx.moveTo(1017.6, 182.5);
      ctx.lineTo(1121.4, 182.5);
      ctx.lineTo(1121.4, 223.1);
      ctx.lineTo(1121.4, 203.2);
      ctx.lineTo(1121.4, 223.1);
      ctx.lineTo(1017.6, 223.1);
      ctx.fillStyle = "rgb(209, 210, 212)";
      ctx.fill();
      ctx.strokeStyle = "rgb(0, 0, 0)";
      ctx.stroke();

      // layer1/Group/Clip Group/Path
      ctx.beginPath();
      ctx.moveTo(982.6, 139.7);
      ctx.lineTo(1055.9, 66.3);
      ctx.lineTo(1084.6, 95.1);
      ctx.lineTo(1070.6, 81.0);
      ctx.lineTo(1084.6, 95.1);
      ctx.lineTo(1011.3, 168.4);
      ctx.fillStyle = "rgb(230, 231, 232)";
      ctx.fill();
      ctx.stroke();

      // layer1/Group/Clip Group/Path
      ctx.beginPath();
      ctx.moveTo(985.6, 265.0);
      ctx.lineTo(1058.9, 338.3);
      ctx.lineTo(1087.7, 309.6);
      ctx.lineTo(1073.6, 323.6);
      ctx.lineTo(1087.7, 309.6);
      ctx.lineTo(1014.3, 236.3);
      ctx.fill();
      ctx.stroke();

      // layer1/Group/Clip Group/Path
      ctx.beginPath();
      ctx.moveTo(1106.1, 1142.8);
      ctx.strokeStyle = "rgb(239, 64, 54)";
      ctx.stroke();

      // layer1/Group/Clip Group/Path
      ctx.beginPath();
      ctx.moveTo(949.7, 276.6);
      ctx.lineTo(949.7, 128.9);
      ctx.bezierCurveTo(990.5, 128.9, 1023.6, 162.0, 1023.6, 202.8);
      ctx.bezierCurveTo(1023.6, 243.6, 990.5, 276.6, 949.7, 276.6);
      ctx.closePath();
      ctx.fillStyle = "rgb(187, 189, 192)";
      ctx.fill();
      ctx.strokeStyle = "rgb(0, 0, 0)";
      ctx.stroke();

      // layer1/Group/Path
      ctx.restore();
      ctx.beginPath();
      ctx.moveTo(1920.3, 1080.2);
      ctx.lineTo(0.0, 1080.2);
      ctx.bezierCurveTo(0.0, 1040.8, 0.1, 913.2, 0.1, 913.2);
      ctx.bezierCurveTo(0.1, 913.2, 4.3, 914.4, 14.9, 909.9);
      ctx.bezierCurveTo(49.3, 895.2, 77.3, 899.3, 111.6, 909.5);
      ctx.bezierCurveTo(148.1, 920.4, 185.4, 928.9, 222.6, 937.5);
      ctx.bezierCurveTo(277.8, 950.2, 333.7, 961.0, 390.5, 962.4);
      ctx.bezierCurveTo(398.8, 962.6, 407.1, 962.6, 415.4, 962.5);
      ctx.bezierCurveTo(520.7, 960.2, 622.9, 928.6, 727.7, 919.8);
      ctx.bezierCurveTo(854.4, 909.2, 981.1, 927.2, 1106.4, 944.6);
      ctx.bezierCurveTo(1277.2, 968.3, 1450.7, 970.3, 1622.7, 961.3);
      ctx.bezierCurveTo(1717.6, 956.4, 1827.0, 930.7, 1920.1, 956.8);
      ctx.fill();
      ctx.restore();
      ctx.restore();
    }

// 3) Cloudy
	function draw3(ctx) {

      // layer1/Clip Group
      ctx.save();

      // layer1/Clip Group/Clipping Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(1500.1, 1080.0);
      ctx.lineTo(420.1, 1080.0);
      ctx.lineTo(420.1, 0.0);
      ctx.lineTo(1500.1, 0.0);
      ctx.lineTo(1500.1, 1080.0);
      ctx.closePath();
      ctx.clip();

      // layer1/Clip Group/Path
      ctx.beginPath();
      ctx.moveTo(919.6, 973.3);
      ctx.bezierCurveTo(919.8, 910.9, 931.2, 829.1, 932.1, 767.3);
      ctx.bezierCurveTo(933.1, 699.2, 929.8, 639.6, 869.6, 597.0);
      ctx.lineTo(912.1, 579.7);
      ctx.bezierCurveTo(972.4, 622.3, 975.6, 699.2, 974.6, 767.3);
      ctx.bezierCurveTo(973.7, 829.1, 962.3, 910.9, 962.1, 973.3);
      ctx.fillStyle = "rgb(128, 130, 132)";
      ctx.fill();
      ctx.lineWidth = 7.5;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.stroke();

      // layer1/Clip Group/Path
      ctx.beginPath();
      ctx.moveTo(911.9, 554.3);
      ctx.bezierCurveTo(927.8, 553.8, 946.0, 553.3, 957.8, 565.8);
      ctx.bezierCurveTo(968.6, 577.2, 970.3, 595.6, 964.0, 609.6);
      ctx.bezierCurveTo(958.2, 622.5, 945.5, 630.1, 931.3, 628.9);
      ctx.bezierCurveTo(919.6, 627.9, 908.4, 621.5, 901.1, 612.3);
      ctx.bezierCurveTo(894.9, 604.3, 892.3, 594.6, 890.4, 584.9);
      ctx.bezierCurveTo(890.2, 583.7, 890.0, 582.5, 889.8, 581.4);
      ctx.fill();
      ctx.lineCap = "butt";
      ctx.stroke();

      // layer1/Clip Group/Path
      ctx.beginPath();
      ctx.moveTo(825.8, 554.3);
      ctx.bezierCurveTo(809.9, 553.8, 791.6, 553.3, 779.8, 565.8);
      ctx.bezierCurveTo(769.1, 577.2, 767.3, 595.6, 773.6, 609.6);
      ctx.bezierCurveTo(779.4, 622.5, 792.2, 630.1, 806.3, 628.9);
      ctx.bezierCurveTo(818.1, 627.9, 829.3, 621.5, 836.5, 612.3);
      ctx.bezierCurveTo(843.5, 603.4, 847.1, 593.2, 849.1, 582.4);
      ctx.fill();
      ctx.stroke();

      // layer1/Clip Group/Path
      ctx.beginPath();
      ctx.moveTo(911.9, 523.8);
      ctx.bezierCurveTo(927.8, 524.3, 946.0, 524.8, 957.8, 512.3);
      ctx.bezierCurveTo(968.6, 500.8, 970.3, 482.5, 964.0, 468.5);
      ctx.bezierCurveTo(958.2, 455.6, 945.5, 447.9, 931.3, 449.1);
      ctx.bezierCurveTo(919.6, 450.1, 908.4, 456.5, 901.1, 465.8);
      ctx.bezierCurveTo(894.9, 473.7, 892.3, 483.5, 890.4, 493.2);
      ctx.bezierCurveTo(890.2, 494.4, 890.0, 495.5, 889.8, 496.7);
      ctx.fill();
      ctx.stroke();

      // layer1/Clip Group/Path
      ctx.beginPath();
      ctx.moveTo(825.8, 523.8);
      ctx.bezierCurveTo(809.9, 524.3, 791.6, 524.8, 779.8, 512.3);
      ctx.bezierCurveTo(769.1, 500.8, 767.3, 482.5, 773.6, 468.5);
      ctx.bezierCurveTo(779.4, 455.6, 792.2, 447.9, 806.3, 449.1);
      ctx.bezierCurveTo(818.1, 450.1, 829.3, 456.5, 836.5, 465.8);
      ctx.bezierCurveTo(843.4, 474.7, 848.0, 485.8, 850.0, 496.7);
      ctx.fill();
      ctx.stroke();

      // layer1/Clip Group/Path
      ctx.beginPath();
      ctx.moveTo(946.7, 586.9);
      ctx.lineCap = "round";
      ctx.stroke();

      // layer1/Clip Group/Path
      ctx.beginPath();
      ctx.moveTo(850.0, 579.7);
      ctx.bezierCurveTo(840.7, 590.1, 831.9, 602.8, 830.0, 617.1);
      ctx.bezierCurveTo(828.2, 630.6, 835.3, 643.3, 846.3, 650.8);
      ctx.bezierCurveTo(869.9, 667.0, 908.5, 654.9, 909.6, 625.0);
      ctx.bezierCurveTo(910.2, 609.3, 897.3, 593.0, 890.0, 579.7);
      ctx.fillStyle = "rgb(0, 0, 0)";
      ctx.fill();
      ctx.lineCap = "butt";
      ctx.stroke();

      // layer1/Clip Group/Path
      ctx.beginPath();
      ctx.moveTo(850.0, 497.6);
      ctx.bezierCurveTo(840.7, 487.3, 831.9, 474.6, 830.0, 460.2);
      ctx.bezierCurveTo(828.2, 446.7, 835.3, 434.0, 846.3, 426.5);
      ctx.bezierCurveTo(869.9, 410.3, 908.5, 422.4, 909.6, 452.3);
      ctx.bezierCurveTo(910.2, 468.0, 897.3, 484.3, 890.0, 497.6);
      ctx.fill();
      ctx.stroke();

      // layer1/Clip Group/Path
      ctx.beginPath();
      ctx.moveTo(826.0, 556.3);
      ctx.bezierCurveTo(806.7, 571.2, 780.9, 576.7, 762.3, 555.7);
      ctx.bezierCurveTo(743.9, 535.0, 756.4, 504.2, 784.0, 502.1);
      ctx.bezierCurveTo(799.7, 500.9, 815.0, 508.9, 828.1, 516.4);
      ctx.fill();
      ctx.stroke();

      // layer1/Clip Group/Path
      ctx.beginPath();
      ctx.moveTo(910.3, 556.3);
      ctx.bezierCurveTo(929.6, 571.2, 955.4, 576.7, 974.0, 555.7);
      ctx.bezierCurveTo(992.4, 535.0, 980.0, 504.2, 952.3, 502.1);
      ctx.bezierCurveTo(936.6, 500.9, 921.4, 508.9, 908.2, 516.4);
      ctx.fill();
      ctx.stroke();

      // layer1/Clip Group/Path
      ctx.beginPath();
      ctx.moveTo(915.9, 538.7);
      ctx.bezierCurveTo(915.9, 565.0, 894.5, 586.4, 868.2, 586.4);
      ctx.bezierCurveTo(841.8, 586.4, 820.5, 565.0, 820.5, 538.7);
      ctx.bezierCurveTo(820.5, 512.3, 841.8, 490.9, 868.2, 490.9);
      ctx.bezierCurveTo(894.5, 490.9, 915.9, 512.3, 915.9, 538.7);
      ctx.closePath();
      ctx.fillStyle = "rgb(187, 189, 192)";
      ctx.fill();
      ctx.lineCap = "round";
      ctx.stroke();

      // layer1/Clip Group/Path
      ctx.beginPath();
      ctx.moveTo(1049.1, 1142.8);
      ctx.strokeStyle = "rgb(239, 64, 54)";
      ctx.stroke();

      // layer1/Clip Group/Path
      ctx.beginPath();
      ctx.moveTo(1049.1, 1142.8);
      ctx.stroke();

      // layer1/Clip Group/Path
      ctx.beginPath();
      ctx.moveTo(1176.3, 186.2);
      ctx.bezierCurveTo(1176.3, 136.0, 1135.6, 95.3, 1085.4, 95.3);
      ctx.bezierCurveTo(1075.8, 95.3, 1066.6, 96.8, 1057.9, 99.6);
      ctx.bezierCurveTo(1045.6, 72.5, 1018.4, 53.6, 986.7, 53.6);
      ctx.bezierCurveTo(957.3, 53.6, 931.9, 70.0, 918.5, 94.1);
      ctx.bezierCurveTo(914.1, 92.3, 909.3, 91.3, 904.3, 91.3);
      ctx.bezierCurveTo(889.1, 91.3, 876.0, 100.2, 869.7, 113.0);
      ctx.bezierCurveTo(861.7, 102.3, 849.0, 95.3, 834.5, 95.3);
      ctx.bezierCurveTo(826.5, 95.3, 819.1, 97.6, 812.7, 101.4);
      ctx.bezierCurveTo(803.1, 89.9, 788.9, 82.5, 772.9, 82.5);
      ctx.bezierCurveTo(744.1, 82.5, 720.7, 105.8, 720.7, 134.6);
      ctx.bezierCurveTo(720.7, 150.8, 728.2, 165.0, 739.7, 174.6);
      ctx.bezierCurveTo(725.1, 185.3, 715.4, 202.5, 715.4, 222.0);
      ctx.bezierCurveTo(715.4, 254.5, 741.8, 280.8, 774.3, 280.8);
      ctx.bezierCurveTo(774.3, 280.8, 774.3, 280.8, 774.4, 280.8);
      ctx.bezierCurveTo(775.1, 311.9, 800.4, 336.9, 831.7, 336.9);
      ctx.bezierCurveTo(837.2, 336.9, 842.4, 335.9, 847.5, 334.4);
      ctx.bezierCurveTo(863.0, 351.3, 885.1, 361.8, 909.7, 361.8);
      ctx.bezierCurveTo(933.2, 361.8, 954.4, 352.3, 969.7, 336.9);
      ctx.bezierCurveTo(986.1, 350.1, 1006.9, 358.1, 1029.6, 358.1);
      ctx.bezierCurveTo(1080.4, 358.1, 1121.8, 318.3, 1124.6, 268.1);
      ctx.bezierCurveTo(1155.1, 253.4, 1176.3, 222.3, 1176.3, 186.2);
      ctx.closePath();
      ctx.fillStyle = "rgb(230, 231, 232)";
      ctx.fill();
      ctx.strokeStyle = "rgb(0, 0, 0)";
      ctx.stroke();

      // layer1/Group
      ctx.restore();

      // layer1/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(1920.3, 1080.2);
      ctx.lineTo(0.0, 1080.2);
      ctx.bezierCurveTo(0.0, 1040.8, 0.1, 913.2, 0.1, 913.2);
      ctx.bezierCurveTo(0.1, 913.2, 4.3, 914.4, 14.9, 909.9);
      ctx.bezierCurveTo(49.3, 895.2, 77.3, 899.3, 111.6, 909.5);
      ctx.bezierCurveTo(148.1, 920.4, 185.4, 928.9, 222.6, 937.5);
      ctx.bezierCurveTo(277.8, 950.2, 333.7, 961.0, 390.5, 962.4);
      ctx.bezierCurveTo(398.8, 962.6, 407.1, 962.6, 415.4, 962.5);
      ctx.bezierCurveTo(520.7, 960.2, 622.9, 928.6, 727.7, 919.8);
      ctx.bezierCurveTo(854.4, 909.2, 981.1, 927.2, 1106.4, 944.6);
      ctx.bezierCurveTo(1277.2, 968.3, 1450.7, 970.3, 1622.7, 961.3);
      ctx.bezierCurveTo(1717.6, 956.4, 1827.0, 930.7, 1920.1, 956.8);
      ctx.fill();
      ctx.restore();
      ctx.restore();
    }

// 4) Raining
	function draw4(ctx) {

      // layer1/Group
      ctx.save();

      // layer1/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(913.6, 963.2);
      ctx.bezierCurveTo(914.3, 912.1, 928.4, 861.8, 928.2, 810.6);
      ctx.bezierCurveTo(927.9, 768.9, 915.5, 705.4, 867.0, 694.3);
      ctx.bezierCurveTo(842.7, 688.8, 812.3, 697.7, 793.6, 713.9);
      ctx.lineTo(781.4, 683.2);
      ctx.bezierCurveTo(809.7, 652.4, 859.3, 653.3, 895.7, 667.7);
      ctx.bezierCurveTo(946.6, 687.8, 960.6, 748.0, 963.8, 797.0);
      ctx.bezierCurveTo(967.4, 852.7, 958.5, 907.8, 957.7, 963.2);
      ctx.lineTo(913.6, 963.2);
      ctx.closePath();
      ctx.fillStyle = "rgb(128, 130, 132)";
      ctx.fill();
      ctx.lineWidth = 7.5;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.stroke();

      // layer1/Group/Path
      ctx.beginPath();
      ctx.moveTo(794.3, 726.5);
      ctx.bezierCurveTo(810.2, 726.0, 828.5, 725.5, 840.3, 738.0);
      ctx.bezierCurveTo(851.0, 749.5, 852.8, 767.8, 846.5, 781.8);
      ctx.bezierCurveTo(840.6, 794.7, 827.9, 802.4, 813.8, 801.1);
      ctx.bezierCurveTo(802.0, 800.1, 790.8, 793.8, 783.6, 784.5);
      ctx.bezierCurveTo(777.4, 776.6, 774.7, 766.8, 772.9, 757.1);
      ctx.bezierCurveTo(772.6, 755.9, 772.4, 754.8, 772.2, 753.6);
      ctx.fill();
      ctx.lineCap = "butt";
      ctx.stroke();

      // layer1/Group/Path
      ctx.beginPath();
      ctx.moveTo(708.2, 726.5);
      ctx.bezierCurveTo(692.3, 726.0, 674.0, 725.5, 662.2, 738.0);
      ctx.bezierCurveTo(651.5, 749.5, 649.7, 767.8, 656.1, 781.8);
      ctx.bezierCurveTo(661.9, 794.7, 674.6, 802.4, 688.7, 801.1);
      ctx.bezierCurveTo(700.5, 800.1, 711.7, 793.8, 718.9, 784.5);
      ctx.bezierCurveTo(725.9, 775.6, 729.5, 765.5, 731.5, 754.6);
      ctx.fill();
      ctx.stroke();

      // layer1/Group/Path
      ctx.beginPath();
      ctx.moveTo(794.3, 696.0);
      ctx.bezierCurveTo(810.2, 696.5, 828.5, 697.0, 840.3, 684.5);
      ctx.bezierCurveTo(851.0, 673.1, 852.8, 654.7, 846.5, 640.8);
      ctx.bezierCurveTo(840.6, 627.8, 827.9, 620.2, 813.8, 621.4);
      ctx.bezierCurveTo(802.0, 622.4, 790.8, 628.8, 783.6, 638.0);
      ctx.bezierCurveTo(777.4, 646.0, 774.7, 655.7, 772.9, 665.4);
      ctx.bezierCurveTo(772.6, 666.6, 772.4, 667.8, 772.2, 669.0);
      ctx.fill();
      ctx.stroke();

      // layer1/Group/Path
      ctx.beginPath();
      ctx.moveTo(708.2, 696.0);
      ctx.bezierCurveTo(692.3, 696.5, 674.0, 697.0, 662.2, 684.5);
      ctx.bezierCurveTo(651.5, 673.1, 649.7, 654.7, 656.1, 640.8);
      ctx.bezierCurveTo(661.9, 627.8, 674.6, 620.2, 688.7, 621.4);
      ctx.bezierCurveTo(700.5, 622.4, 711.7, 628.8, 718.9, 638.0);
      ctx.bezierCurveTo(725.9, 646.9, 730.4, 658.1, 732.4, 669.0);
      ctx.fill();
      ctx.stroke();

      // layer1/Group/Path
      ctx.beginPath();
      ctx.moveTo(732.4, 751.9);
      ctx.bezierCurveTo(723.2, 762.3, 714.3, 775.0, 712.4, 789.4);
      ctx.bezierCurveTo(710.6, 802.9, 717.7, 815.6, 728.7, 823.1);
      ctx.bezierCurveTo(752.3, 839.2, 790.9, 827.2, 792.1, 797.3);
      ctx.bezierCurveTo(792.6, 781.6, 779.7, 765.3, 772.4, 751.9);
      ctx.fillStyle = "rgb(0, 0, 0)";
      ctx.fill();
      ctx.stroke();

      // layer1/Group/Path
      ctx.beginPath();
      ctx.moveTo(732.4, 669.9);
      ctx.bezierCurveTo(723.2, 659.5, 714.3, 646.8, 712.4, 632.5);
      ctx.bezierCurveTo(710.6, 619.0, 717.7, 606.3, 728.7, 598.8);
      ctx.bezierCurveTo(752.3, 582.6, 790.9, 594.7, 792.1, 624.6);
      ctx.bezierCurveTo(792.6, 640.3, 779.7, 656.6, 772.4, 669.9);
      ctx.fill();
      ctx.stroke();

      // layer1/Group/Path
      ctx.beginPath();
      ctx.moveTo(708.4, 728.5);
      ctx.bezierCurveTo(689.1, 743.5, 663.4, 748.9, 644.7, 728.0);
      ctx.bezierCurveTo(626.3, 707.3, 638.8, 676.4, 666.4, 674.4);
      ctx.bezierCurveTo(682.1, 673.2, 697.4, 681.1, 710.6, 688.6);
      ctx.fill();
      ctx.stroke();

      // layer1/Group/Path
      ctx.beginPath();
      ctx.moveTo(792.8, 728.5);
      ctx.bezierCurveTo(812.0, 743.5, 837.8, 748.9, 856.5, 728.0);
      ctx.bezierCurveTo(874.9, 707.3, 862.4, 676.4, 834.7, 674.4);
      ctx.bezierCurveTo(819.0, 673.2, 803.8, 681.1, 790.6, 688.6);
      ctx.fill();
      ctx.stroke();

      // layer1/Group/Path
      ctx.beginPath();
      ctx.moveTo(798.3, 710.9);
      ctx.bezierCurveTo(798.3, 737.2, 777.0, 758.6, 750.6, 758.6);
      ctx.bezierCurveTo(724.3, 758.6, 702.9, 737.2, 702.9, 710.9);
      ctx.bezierCurveTo(702.9, 684.5, 724.3, 663.2, 750.6, 663.2);
      ctx.bezierCurveTo(777.0, 663.2, 798.3, 684.5, 798.3, 710.9);
      ctx.closePath();
      ctx.fillStyle = "rgb(187, 189, 192)";
      ctx.fill();
      ctx.lineCap = "round";
      ctx.stroke();

      // layer1/Group/Path
      ctx.beginPath();
      ctx.moveTo(1391.7, 293.6);
      ctx.bezierCurveTo(1408.3, 233.4, 1372.9, 171.2, 1312.8, 154.6);
      ctx.bezierCurveTo(1301.3, 151.5, 1289.7, 150.2, 1278.4, 150.6);
      ctx.bezierCurveTo(1272.6, 114.1, 1246.2, 82.5, 1208.2, 72.0);
      ctx.bezierCurveTo(1172.9, 62.3, 1137.1, 73.6, 1113.1, 98.0);
      ctx.bezierCurveTo(1108.4, 94.5, 1103.0, 91.7, 1097.0, 90.0);
      ctx.bezierCurveTo(1078.7, 85.0, 1060.1, 91.3, 1048.3, 104.7);
      ctx.bezierCurveTo(1042.2, 89.2, 1029.3, 76.6, 1012.0, 71.8);
      ctx.bezierCurveTo(1002.4, 69.2, 992.8, 69.5, 983.8, 71.8);
      ctx.bezierCurveTo(976.1, 55.0, 961.5, 41.4, 942.3, 36.1);
      ctx.bezierCurveTo(907.7, 26.6, 872.0, 46.9, 862.5, 81.4);
      ctx.bezierCurveTo(857.2, 100.7, 861.5, 120.3, 872.1, 135.5);
      ctx.bezierCurveTo(851.0, 143.5, 833.8, 161.0, 827.3, 184.4);
      ctx.bezierCurveTo(816.6, 223.3, 839.5, 263.6, 878.5, 274.3);
      ctx.bezierCurveTo(878.5, 274.4, 878.6, 274.3, 878.6, 274.4);
      ctx.bezierCurveTo(869.3, 311.9, 891.3, 350.2, 928.8, 360.5);
      ctx.bezierCurveTo(935.4, 362.4, 942.0, 362.9, 948.6, 362.8);
      ctx.bezierCurveTo(961.6, 388.1, 984.6, 408.1, 1014.2, 416.2);
      ctx.bezierCurveTo(1042.3, 423.9, 1070.9, 419.5, 1094.4, 406.1);
      ctx.bezierCurveTo(1109.6, 427.4, 1131.9, 443.8, 1159.1, 451.3);
      ctx.bezierCurveTo(1220.1, 468.1, 1282.9, 434.0, 1302.8, 374.7);
      ctx.bezierCurveTo(1344.2, 367.2, 1379.8, 336.9, 1391.7, 293.6);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // layer1/Group/Path
      ctx.beginPath();
      ctx.moveTo(850.1, 344.5);
      ctx.lineTo(772.2, 515.9);
      ctx.lineWidth = 11.3;
      ctx.stroke();

      // layer1/Group/Path
      ctx.beginPath();
      ctx.moveTo(938.5, 413.1);
      ctx.lineTo(855.5, 596.8);
      ctx.stroke();

      // layer1/Group/Path
      ctx.beginPath();
      ctx.moveTo(1012.3, 480.9);
      ctx.lineTo(958.3, 596.8);
      ctx.stroke();

      // layer1/Group/Path
      ctx.beginPath();
      ctx.moveTo(1105.8, 465.7);
      ctx.lineTo(1012.3, 669.9);
      ctx.stroke();

      // layer1/Group/Path
      ctx.beginPath();
      ctx.moveTo(1168.7, 522.3);
      ctx.lineTo(1108.2, 652.1);
      ctx.stroke();

      // layer1/Group/Path
      ctx.beginPath();
      ctx.moveTo(1500.1, 1080.0);
      ctx.lineTo(420.1, 1080.0);
      ctx.lineTo(420.1, 0.0);
      ctx.lineTo(1500.1, 0.0);
      ctx.lineTo(1500.1, 1080.0);
      ctx.closePath();

      // layer1/Group
      ctx.restore();

      // layer1/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(1920.3, 1080.2);
      ctx.lineTo(0.0, 1080.2);
      ctx.bezierCurveTo(0.0, 1040.8, 0.1, 913.2, 0.1, 913.2);
      ctx.bezierCurveTo(0.1, 913.2, 4.3, 914.4, 14.9, 909.9);
      ctx.bezierCurveTo(49.3, 895.2, 77.3, 899.3, 111.6, 909.5);
      ctx.bezierCurveTo(148.1, 920.4, 185.4, 928.9, 222.6, 937.5);
      ctx.bezierCurveTo(277.8, 950.2, 333.7, 961.0, 390.5, 962.4);
      ctx.bezierCurveTo(398.8, 962.6, 407.1, 962.6, 415.4, 962.5);
      ctx.bezierCurveTo(520.7, 960.2, 622.9, 928.6, 727.7, 919.8);
      ctx.bezierCurveTo(854.4, 909.2, 981.1, 927.2, 1106.4, 944.6);
      ctx.bezierCurveTo(1277.2, 968.3, 1450.7, 970.3, 1622.7, 961.3);
      ctx.bezierCurveTo(1717.6, 956.4, 1827.0, 930.7, 1920.1, 956.8);
      ctx.fill();
      ctx.restore();
      ctx.restore();
    }

// 5) Thunderstorms
	function draw5(ctx) {

      // layer1/Group
      ctx.save();

      // layer1/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(925.6, 963.2);
      ctx.bezierCurveTo(926.3, 912.1, 940.4, 861.8, 940.1, 810.6);
      ctx.bezierCurveTo(939.9, 768.9, 927.5, 705.4, 879.0, 694.3);
      ctx.bezierCurveTo(854.7, 688.7, 824.3, 697.7, 805.6, 713.8);
      ctx.lineTo(793.4, 683.2);
      ctx.bezierCurveTo(821.7, 652.4, 871.3, 653.3, 907.7, 667.6);
      ctx.bezierCurveTo(958.6, 687.7, 972.6, 748.0, 975.8, 797.0);
      ctx.bezierCurveTo(979.4, 852.7, 970.5, 907.7, 969.7, 963.2);
      ctx.lineTo(925.6, 963.2);
      ctx.closePath();
      ctx.fillStyle = "rgb(128, 130, 132)";
      ctx.fill();
      ctx.lineWidth = 7.5;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.stroke();

      // layer1/Group/Path
      ctx.beginPath();
      ctx.moveTo(918.5, 715.1);
      ctx.bezierCurveTo(907.0, 702.9, 889.4, 703.1, 873.8, 703.6);
      ctx.bezierCurveTo(869.8, 715.0, 861.6, 724.4, 851.1, 730.0);
      ctx.lineTo(850.5, 730.7);
      ctx.bezierCurveTo(850.7, 731.8, 850.9, 733.0, 851.1, 734.2);
      ctx.bezierCurveTo(853.0, 743.9, 855.6, 753.6, 861.8, 761.6);
      ctx.bezierCurveTo(869.1, 770.9, 880.3, 777.2, 892.0, 778.2);
      ctx.bezierCurveTo(906.2, 779.4, 918.9, 771.8, 924.7, 758.9);
      ctx.bezierCurveTo(931.0, 744.9, 929.3, 726.5, 918.5, 715.1);
      ctx.closePath();
      ctx.fill();
      ctx.lineCap = "butt";
      ctx.stroke();

      // layer1/Group/Path
      ctx.beginPath();
      ctx.moveTo(709.0, 773.3);
      ctx.bezierCurveTo(693.3, 772.8, 675.6, 772.6, 664.0, 784.9);
      ctx.bezierCurveTo(653.3, 796.3, 651.5, 814.6, 657.8, 828.6);
      ctx.bezierCurveTo(663.6, 841.5, 676.4, 849.2, 690.5, 848.0);
      ctx.bezierCurveTo(702.3, 847.0, 713.5, 840.6, 720.7, 831.4);
      ctx.bezierCurveTo(727.7, 822.5, 731.3, 812.3, 733.3, 801.4);
      ctx.lineTo(732.0, 799.9);
      ctx.bezierCurveTo(721.3, 794.3, 713.0, 784.9, 709.0, 773.3);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // layer1/Group/Path
      ctx.beginPath();
      ctx.moveTo(925.3, 612.6);
      ctx.bezierCurveTo(919.5, 599.7, 906.7, 592.1, 892.6, 593.3);
      ctx.bezierCurveTo(880.8, 594.3, 869.6, 600.6, 862.4, 609.9);
      ctx.bezierCurveTo(856.2, 617.9, 853.6, 627.6, 851.7, 637.3);
      ctx.bezierCurveTo(851.6, 638.1, 851.4, 639.0, 851.2, 639.8);
      ctx.bezierCurveTo(863.0, 645.3, 872.0, 655.5, 876.1, 668.0);
      ctx.bezierCurveTo(891.2, 668.4, 908.0, 668.1, 919.1, 656.4);
      ctx.bezierCurveTo(929.8, 645.0, 931.6, 626.6, 925.3, 612.6);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // layer1/Group/Path
      ctx.beginPath();
      ctx.moveTo(619.8, 473.1);
      ctx.bezierCurveTo(617.7, 462.6, 613.3, 451.9, 606.6, 443.3);
      ctx.bezierCurveTo(599.4, 434.1, 588.2, 427.7, 576.4, 426.7);
      ctx.bezierCurveTo(562.3, 425.5, 549.5, 433.2, 543.7, 446.1);
      ctx.bezierCurveTo(537.4, 460.1, 539.2, 478.4, 549.9, 489.8);
      ctx.bezierCurveTo(561.4, 502.1, 579.1, 501.9, 594.7, 501.4);
      ctx.bezierCurveTo(598.8, 488.8, 607.9, 478.6, 619.8, 473.1);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // layer1/Group/Path
      ctx.beginPath();
      ctx.moveTo(793.8, 310.4);
      ctx.lineTo(704.0, 492.0);
      ctx.lineWidth = 11.2;
      ctx.lineCap = "round";
      ctx.stroke();

      // layer1/Group/Path
      ctx.beginPath();
      ctx.moveTo(864.4, 356.1);
      ctx.lineTo(815.4, 464.1);
      ctx.stroke();

      // layer1/Group/Path
      ctx.beginPath();
      ctx.moveTo(1219.0, 556.5);
      ctx.lineTo(1145.0, 702.8);
      ctx.stroke();

      // layer1/Group/Path
      ctx.beginPath();
      ctx.moveTo(1147.5, 512.4);
      ctx.lineTo(1054.0, 716.5);
      ctx.stroke();

      // layer1/Group/Path
      ctx.beginPath();
      ctx.moveTo(828.6, 637.5);
      ctx.bezierCurveTo(836.3, 637.5, 843.4, 639.4, 849.8, 642.6);
      ctx.bezierCurveTo(857.2, 629.6, 869.2, 613.9, 868.6, 598.8);
      ctx.bezierCurveTo(867.5, 568.9, 828.8, 556.8, 805.3, 573.0);
      ctx.bezierCurveTo(794.3, 580.5, 787.2, 593.2, 788.9, 606.7);
      ctx.bezierCurveTo(790.7, 620.4, 798.8, 632.5, 807.6, 642.5);
      ctx.bezierCurveTo(814.0, 639.4, 821.1, 637.5, 828.6, 637.5);
      ctx.closePath();
      ctx.fillStyle = "rgb(0, 0, 0)";
      ctx.fill();
      ctx.lineWidth = 7.5;
      ctx.lineCap = "butt";
      ctx.stroke();

      // layer1/Group/Path
      ctx.beginPath();
      ctx.moveTo(648.3, 685.1);
      ctx.bezierCurveTo(648.3, 677.0, 650.5, 669.4, 654.2, 662.6);
      ctx.bezierCurveTo(641.1, 655.2, 625.9, 647.4, 610.3, 648.6);
      ctx.bezierCurveTo(582.7, 650.6, 570.2, 681.5, 588.6, 702.2);
      ctx.bezierCurveTo(607.1, 723.0, 632.6, 717.7, 651.9, 703.0);
      ctx.bezierCurveTo(649.6, 697.5, 648.3, 691.5, 648.3, 685.1);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // layer1/Group/Path
      ctx.beginPath();
      ctx.moveTo(828.6, 762.5);
      ctx.bezierCurveTo(821.1, 762.5, 814.0, 760.6, 807.6, 757.4);
      ctx.bezierCurveTo(798.8, 767.5, 790.7, 779.6, 788.9, 793.3);
      ctx.bezierCurveTo(787.2, 806.7, 794.3, 819.5, 805.3, 827.0);
      ctx.bezierCurveTo(828.8, 843.1, 867.5, 831.0, 868.6, 801.1);
      ctx.bezierCurveTo(869.2, 786.0, 857.2, 770.4, 849.8, 757.3);
      ctx.bezierCurveTo(843.4, 760.6, 836.3, 762.5, 828.6, 762.5);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // layer1/Group/Path
      ctx.beginPath();
      ctx.moveTo(917.9, 648.6);
      ctx.bezierCurveTo(903.2, 647.5, 888.9, 654.3, 876.3, 661.3);
      ctx.bezierCurveTo(880.4, 668.4, 882.9, 676.4, 882.9, 685.1);
      ctx.bezierCurveTo(882.9, 692.1, 881.3, 698.7, 878.7, 704.6);
      ctx.bezierCurveTo(897.6, 718.0, 921.8, 722.2, 939.6, 702.2);
      ctx.bezierCurveTo(958.0, 681.5, 945.5, 650.6, 917.9, 648.6);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // layer1/Group/Path
      ctx.beginPath();
      ctx.moveTo(876.3, 685.1);
      ctx.bezierCurveTo(876.3, 711.5, 855.0, 732.8, 828.6, 732.8);
      ctx.bezierCurveTo(802.3, 732.8, 780.9, 711.5, 780.9, 685.1);
      ctx.bezierCurveTo(780.9, 658.8, 802.3, 637.4, 828.6, 637.4);
      ctx.bezierCurveTo(855.0, 637.4, 876.3, 658.8, 876.3, 685.1);
      ctx.closePath();
      ctx.fillStyle = "rgb(187, 189, 192)";
      ctx.fill();
      ctx.lineCap = "round";
      ctx.stroke();

      // layer1/Group/Path
      ctx.beginPath();
      ctx.moveTo(1073.7, 418.9);
      ctx.lineTo(972.5, 513.7);
      ctx.lineTo(923.1, 512.4);
      ctx.lineTo(828.6, 637.5);
      ctx.lineTo(873.8, 480.1);
      ctx.lineTo(894.4, 501.5);
      ctx.lineTo(966.9, 382.5);
      ctx.lineTo(1073.7, 418.9);
      ctx.closePath();
      ctx.fillStyle = "rgb(230, 231, 232)";
      ctx.fill();
      ctx.stroke();

      // layer1/Group/Path
      ctx.beginPath();
      ctx.moveTo(1453.1, 323.8);
      ctx.bezierCurveTo(1471.3, 257.8, 1432.5, 189.5, 1366.5, 171.3);
      ctx.bezierCurveTo(1353.9, 167.9, 1341.2, 166.5, 1328.8, 167.0);
      ctx.bezierCurveTo(1322.4, 126.9, 1293.6, 92.2, 1251.9, 80.7);
      ctx.bezierCurveTo(1213.1, 70.0, 1173.8, 82.5, 1147.5, 109.2);
      ctx.bezierCurveTo(1142.3, 105.3, 1136.4, 102.2, 1129.8, 100.4);
      ctx.bezierCurveTo(1109.7, 94.9, 1089.3, 101.9, 1076.4, 116.5);
      ctx.bezierCurveTo(1069.7, 99.5, 1055.5, 85.7, 1036.5, 80.5);
      ctx.bezierCurveTo(1026.0, 77.6, 1015.4, 77.9, 1005.6, 80.5);
      ctx.bezierCurveTo(997.1, 62.0, 981.2, 47.1, 960.0, 41.3);
      ctx.bezierCurveTo(922.1, 30.9, 883.0, 53.1, 872.5, 91.0);
      ctx.bezierCurveTo(866.7, 112.2, 871.4, 133.7, 883.1, 150.4);
      ctx.bezierCurveTo(859.9, 159.2, 841.0, 178.3, 833.9, 204.0);
      ctx.bezierCurveTo(822.2, 246.7, 847.3, 290.9, 890.0, 302.7);
      ctx.bezierCurveTo(890.1, 302.7, 890.2, 302.7, 890.2, 302.7);
      ctx.bezierCurveTo(879.9, 343.9, 904.2, 385.9, 945.3, 397.3);
      ctx.bezierCurveTo(952.5, 399.3, 959.8, 399.8, 967.0, 399.7);
      ctx.bezierCurveTo(981.2, 427.5, 1006.5, 449.4, 1038.9, 458.3);
      ctx.bezierCurveTo(1069.8, 466.8, 1101.1, 462.0, 1126.9, 447.3);
      ctx.bezierCurveTo(1143.6, 470.6, 1168.1, 488.6, 1198.0, 496.8);
      ctx.bezierCurveTo(1264.8, 515.2, 1333.7, 477.8, 1355.5, 412.8);
      ctx.bezierCurveTo(1401.0, 404.6, 1440.1, 371.3, 1453.1, 323.8);
      ctx.closePath();
      ctx.fillStyle = "rgb(147, 149, 151)";
      ctx.fill();
      ctx.stroke();

      // layer1/Group/Path
      ctx.beginPath();
      ctx.moveTo(828.6, 637.5);
      ctx.lineTo(813.3, 668.1);
      ctx.lineTo(828.6, 682.2);
      ctx.lineTo(803.7, 702.8);
      ctx.lineTo(816.2, 712.0);
      ctx.lineTo(793.8, 717.7);
      ctx.stroke();

      // layer1/Group/Path
      ctx.beginPath();
      ctx.moveTo(1500.1, 1080.0);
      ctx.lineTo(420.1, 1080.0);
      ctx.lineTo(420.1, 0.0);
      ctx.lineTo(1500.1, 0.0);
      ctx.lineTo(1500.1, 1080.0);
      ctx.closePath();

      // layer1/Group
      ctx.restore();

      // layer1/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(1920.3, 1080.2);
      ctx.lineTo(0.0, 1080.2);
      ctx.bezierCurveTo(0.0, 1040.8, 0.1, 913.2, 0.1, 913.2);
      ctx.bezierCurveTo(0.1, 913.2, 4.3, 914.4, 14.9, 909.9);
      ctx.bezierCurveTo(49.3, 895.2, 77.3, 899.2, 111.6, 909.5);
      ctx.bezierCurveTo(148.1, 920.4, 185.4, 928.9, 222.6, 937.5);
      ctx.bezierCurveTo(277.8, 950.2, 333.7, 960.9, 390.5, 962.4);
      ctx.bezierCurveTo(398.8, 962.6, 407.1, 962.6, 415.4, 962.5);
      ctx.bezierCurveTo(520.7, 960.2, 622.9, 928.6, 727.7, 919.8);
      ctx.bezierCurveTo(854.4, 909.2, 981.1, 927.2, 1106.4, 944.6);
      ctx.bezierCurveTo(1277.2, 968.3, 1450.7, 970.2, 1622.7, 961.3);
      ctx.bezierCurveTo(1717.6, 956.4, 1827.0, 930.7, 1920.1, 956.8);
      ctx.fill();
      ctx.restore();
      ctx.restore();
    }

// 6) Snowing
	function draw6(ctx) {

      // layer1/Group
      ctx.save();

      // layer1/Group/Group
      ctx.save();

      // layer1/Group/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(977.1, 777.6);
      ctx.lineTo(977.1, 778.7);
      ctx.lineTo(930.4, 778.7);
      ctx.bezierCurveTo(938.0, 923.0, 931.3, 974.9, 925.4, 1073.8);
      ctx.lineTo(972.4, 1073.8);
      ctx.bezierCurveTo(978.5, 976.7, 984.9, 923.3, 977.1, 777.6);
      ctx.closePath();
      ctx.fillStyle = "rgb(102, 102, 102)";
      ctx.fill();
      ctx.lineWidth = 7.5;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.stroke();

      // layer1/Group/Path
      ctx.restore();
      ctx.beginPath();
      ctx.moveTo(996.4, 691.4);
      ctx.bezierCurveTo(1012.3, 690.9, 1030.6, 690.4, 1042.4, 702.9);
      ctx.bezierCurveTo(1053.1, 714.3, 1054.9, 732.7, 1048.6, 746.7);
      ctx.bezierCurveTo(1042.8, 759.6, 1030.0, 767.3, 1015.9, 766.1);
      ctx.bezierCurveTo(1004.1, 765.1, 992.9, 758.7, 985.7, 749.4);
      ctx.bezierCurveTo(979.4, 741.4, 976.8, 731.7, 975.0, 722.0);
      ctx.bezierCurveTo(974.7, 720.8, 974.5, 719.6, 974.3, 718.5);
      ctx.fillStyle = "rgb(128, 130, 132)";
      ctx.fill();
      ctx.lineWidth = 7.5;
      ctx.lineJoin = "round";
      ctx.stroke();

      // layer1/Group/Path
      ctx.beginPath();
      ctx.moveTo(910.3, 691.4);
      ctx.bezierCurveTo(894.4, 690.9, 876.1, 690.4, 864.3, 702.9);
      ctx.bezierCurveTo(853.6, 714.3, 851.8, 732.7, 858.1, 746.7);
      ctx.bezierCurveTo(863.9, 759.6, 876.7, 767.3, 890.8, 766.1);
      ctx.bezierCurveTo(902.6, 765.1, 913.8, 758.7, 921.0, 749.4);
      ctx.bezierCurveTo(928.0, 740.6, 931.6, 730.3, 933.6, 719.5);
      ctx.fill();
      ctx.stroke();

      // layer1/Group/Path
      ctx.beginPath();
      ctx.moveTo(996.4, 660.9);
      ctx.bezierCurveTo(1012.3, 661.4, 1030.6, 661.9, 1042.4, 649.4);
      ctx.bezierCurveTo(1053.1, 638.0, 1054.9, 619.6, 1048.6, 605.6);
      ctx.bezierCurveTo(1042.8, 592.7, 1030.0, 585.1, 1015.9, 586.3);
      ctx.bezierCurveTo(1004.1, 587.3, 992.9, 593.6, 985.7, 602.9);
      ctx.bezierCurveTo(979.4, 610.9, 976.8, 620.6, 975.0, 630.3);
      ctx.bezierCurveTo(974.7, 631.5, 974.5, 632.7, 974.3, 633.8);
      ctx.fill();
      ctx.stroke();

      // layer1/Group/Path
      ctx.beginPath();
      ctx.moveTo(910.3, 660.9);
      ctx.bezierCurveTo(894.4, 661.4, 876.1, 661.9, 864.3, 649.4);
      ctx.bezierCurveTo(853.6, 638.0, 851.8, 619.6, 858.1, 605.6);
      ctx.bezierCurveTo(863.9, 592.7, 876.7, 585.1, 890.8, 586.3);
      ctx.bezierCurveTo(902.6, 587.3, 913.8, 593.6, 921.0, 602.9);
      ctx.bezierCurveTo(928.0, 611.8, 932.5, 623.0, 934.5, 633.8);
      ctx.fill();
      ctx.stroke();

      // layer1/Group/Path
      ctx.beginPath();
      ctx.moveTo(934.5, 716.9);
      ctx.bezierCurveTo(925.2, 727.2, 916.4, 739.9, 914.5, 754.3);
      ctx.bezierCurveTo(912.7, 767.8, 919.8, 780.5, 930.8, 788.0);
      ctx.bezierCurveTo(954.4, 804.1, 993.0, 792.0, 994.2, 762.2);
      ctx.bezierCurveTo(994.7, 746.5, 981.8, 730.2, 974.6, 716.9);
      ctx.fillStyle = "rgb(0, 0, 0)";
      ctx.fill();
      ctx.stroke();

      // layer1/Group/Path
      ctx.beginPath();
      ctx.moveTo(934.5, 634.8);
      ctx.bezierCurveTo(925.2, 624.4, 916.4, 611.7, 914.5, 597.3);
      ctx.bezierCurveTo(912.7, 583.9, 919.8, 571.1, 930.8, 563.6);
      ctx.bezierCurveTo(954.4, 547.5, 993.0, 559.6, 994.2, 589.5);
      ctx.bezierCurveTo(994.7, 605.1, 981.8, 621.4, 974.6, 634.8);
      ctx.fill();
      ctx.stroke();

      // layer1/Group/Path
      ctx.beginPath();
      ctx.moveTo(910.5, 693.4);
      ctx.bezierCurveTo(891.2, 708.4, 865.4, 713.8, 846.8, 692.9);
      ctx.bezierCurveTo(828.4, 672.2, 840.9, 641.3, 868.5, 639.2);
      ctx.bezierCurveTo(884.2, 638.1, 899.5, 646.0, 912.6, 653.5);
      ctx.fill();
      ctx.stroke();

      // layer1/Group/Path
      ctx.beginPath();
      ctx.moveTo(994.9, 693.4);
      ctx.bezierCurveTo(1014.1, 708.4, 1039.9, 713.8, 1058.6, 692.9);
      ctx.bezierCurveTo(1077.0, 672.2, 1064.5, 641.3, 1036.9, 639.2);
      ctx.bezierCurveTo(1021.1, 638.1, 1005.9, 646.0, 992.7, 653.5);
      ctx.fill();
      ctx.stroke();

      // layer1/Group/Path
      ctx.beginPath();
      ctx.moveTo(1000.4, 675.8);
      ctx.bezierCurveTo(1000.4, 702.1, 979.1, 723.5, 952.7, 723.5);
      ctx.bezierCurveTo(926.4, 723.5, 905.0, 702.1, 905.0, 675.8);
      ctx.bezierCurveTo(905.0, 649.4, 926.4, 628.1, 952.7, 628.1);
      ctx.bezierCurveTo(979.1, 628.1, 1000.4, 649.4, 1000.4, 675.8);
      ctx.closePath();
      ctx.fillStyle = "rgb(187, 189, 192)";
      ctx.fill();
      ctx.lineCap = "round";
      ctx.stroke();

      // layer1/Group/Path
      ctx.beginPath();
      ctx.moveTo(1236.3, 177.5);
      ctx.bezierCurveTo(1236.3, 120.4, 1190.1, 74.2, 1133.0, 74.2);
      ctx.bezierCurveTo(1122.1, 74.2, 1111.6, 75.9, 1101.8, 79.0);
      ctx.bezierCurveTo(1087.7, 48.2, 1056.8, 26.7, 1020.8, 26.7);
      ctx.bezierCurveTo(987.3, 26.7, 958.5, 45.4, 943.3, 72.7);
      ctx.bezierCurveTo(938.3, 70.7, 932.8, 69.6, 927.1, 69.6);
      ctx.bezierCurveTo(909.8, 69.6, 894.9, 79.7, 887.8, 94.3);
      ctx.bezierCurveTo(878.6, 82.2, 864.2, 74.2, 847.8, 74.2);
      ctx.bezierCurveTo(838.7, 74.2, 830.2, 76.8, 822.9, 81.0);
      ctx.bezierCurveTo(812.0, 68.0, 795.9, 59.6, 777.6, 59.6);
      ctx.bezierCurveTo(744.9, 59.6, 718.3, 86.1, 718.3, 118.9);
      ctx.bezierCurveTo(718.3, 137.2, 726.8, 153.4, 739.9, 164.3);
      ctx.bezierCurveTo(723.3, 176.5, 712.3, 196.0, 712.3, 218.2);
      ctx.bezierCurveTo(712.3, 255.2, 742.3, 285.1, 779.2, 285.1);
      ctx.bezierCurveTo(779.3, 285.1, 779.3, 285.1, 779.4, 285.1);
      ctx.bezierCurveTo(780.2, 320.4, 809.0, 348.9, 844.5, 348.9);
      ctx.bezierCurveTo(850.8, 348.9, 856.7, 347.7, 862.5, 346.1);
      ctx.bezierCurveTo(880.1, 365.2, 905.2, 377.2, 933.3, 377.2);
      ctx.bezierCurveTo(959.9, 377.2, 984.0, 366.4, 1001.5, 348.9);
      ctx.bezierCurveTo(1020.1, 363.9, 1043.8, 373.0, 1069.6, 373.0);
      ctx.bezierCurveTo(1127.4, 373.0, 1174.4, 327.7, 1177.6, 270.6);
      ctx.bezierCurveTo(1212.3, 254.0, 1236.3, 218.6, 1236.3, 177.5);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // layer1/Group/Group

      // layer1/Group/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(1103.6, 490.7);
      ctx.lineTo(1093.1, 541.5);
      ctx.lineTo(1082.5, 490.4);
      ctx.lineTo(1092.9, 472.3);
      ctx.fillStyle = "rgb(230, 231, 232)";
      ctx.fill();
      ctx.lineWidth = 3.8;
      ctx.stroke();

      // layer1/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(1114.1, 472.3);
      ctx.lineTo(1153.6, 507.5);
      ctx.lineTo(1103.6, 490.7);
      ctx.lineTo(1093.1, 472.4);
      ctx.fillStyle = "rgb(187, 189, 192)";
      ctx.fill();
      ctx.stroke();

      // layer1/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(1103.5, 454.0);
      ctx.lineTo(1153.6, 437.6);
      ctx.lineTo(1114.1, 472.3);
      ctx.lineTo(1093.1, 472.4);
      ctx.fillStyle = "rgb(209, 210, 212)";
      ctx.fill();
      ctx.stroke();

      // layer1/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(1071.8, 472.3);
      ctx.lineTo(1032.5, 507.5);
      ctx.lineTo(1082.4, 490.6);
      ctx.lineTo(1093.0, 472.5);
      ctx.fill();
      ctx.stroke();

      // layer1/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(1082.6, 454.4);
      ctx.lineTo(1093.1, 402.6);
      ctx.lineTo(1103.5, 454.0);
      ctx.lineTo(1092.9, 472.3);
      ctx.fillStyle = "rgb(230, 231, 232)";
      ctx.fill();
      ctx.stroke();

      // layer1/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(1093.1, 472.4);
      ctx.lineTo(1072.2, 472.5);
      ctx.lineTo(1032.6, 437.6);
      ctx.lineTo(1082.6, 454.4);
      ctx.lineTo(1093.1, 472.4);
      ctx.fillStyle = "rgb(187, 189, 192)";
      ctx.fill();
      ctx.stroke();

      // layer1/Group/Group
      ctx.restore();

      // layer1/Group/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(680.2, 829.4);
      ctx.lineTo(669.7, 880.2);
      ctx.lineTo(659.1, 829.1);
      ctx.lineTo(669.5, 811.0);
      ctx.fillStyle = "rgb(230, 231, 232)";
      ctx.fill();
      ctx.lineWidth = 3.8;
      ctx.stroke();

      // layer1/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(690.6, 811.0);
      ctx.lineTo(730.2, 846.2);
      ctx.lineTo(680.2, 829.4);
      ctx.lineTo(669.6, 811.1);
      ctx.fillStyle = "rgb(187, 189, 192)";
      ctx.fill();
      ctx.stroke();

      // layer1/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(680.1, 792.7);
      ctx.lineTo(730.2, 776.3);
      ctx.lineTo(690.6, 811.0);
      ctx.lineTo(669.6, 811.1);
      ctx.fillStyle = "rgb(209, 210, 212)";
      ctx.fill();
      ctx.stroke();

      // layer1/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(648.4, 811.0);
      ctx.lineTo(609.1, 846.2);
      ctx.lineTo(659.0, 829.3);
      ctx.lineTo(669.6, 811.2);
      ctx.fill();
      ctx.stroke();

      // layer1/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(659.2, 793.1);
      ctx.lineTo(669.7, 741.3);
      ctx.lineTo(680.1, 792.7);
      ctx.lineTo(669.5, 811.0);
      ctx.fillStyle = "rgb(230, 231, 232)";
      ctx.fill();
      ctx.stroke();

      // layer1/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(669.6, 811.1);
      ctx.lineTo(648.7, 811.2);
      ctx.lineTo(609.2, 776.3);
      ctx.lineTo(659.2, 793.1);
      ctx.lineTo(669.6, 811.1);
      ctx.fillStyle = "rgb(187, 189, 192)";
      ctx.fill();
      ctx.stroke();

      // layer1/Group/Group
      ctx.restore();

      // layer1/Group/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(1318.6, 691.5);
      ctx.lineTo(1308.1, 742.4);
      ctx.lineTo(1297.5, 691.2);
      ctx.lineTo(1307.9, 673.2);
      ctx.fillStyle = "rgb(230, 231, 232)";
      ctx.fill();
      ctx.lineWidth = 3.8;
      ctx.stroke();

      // layer1/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(1329.1, 673.1);
      ctx.lineTo(1368.6, 708.3);
      ctx.lineTo(1318.6, 691.5);
      ctx.lineTo(1308.0, 673.2);
      ctx.fillStyle = "rgb(187, 189, 192)";
      ctx.fill();
      ctx.stroke();

      // layer1/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(1318.5, 654.8);
      ctx.lineTo(1368.6, 638.4);
      ctx.lineTo(1329.1, 673.1);
      ctx.lineTo(1308.0, 673.2);
      ctx.fillStyle = "rgb(209, 210, 212)";
      ctx.fill();
      ctx.stroke();

      // layer1/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(1286.8, 673.1);
      ctx.lineTo(1247.5, 708.3);
      ctx.lineTo(1297.4, 691.4);
      ctx.lineTo(1308.0, 673.3);
      ctx.fill();
      ctx.stroke();

      // layer1/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(1297.6, 655.2);
      ctx.lineTo(1308.1, 603.5);
      ctx.lineTo(1318.5, 654.8);
      ctx.lineTo(1307.9, 673.2);
      ctx.fillStyle = "rgb(230, 231, 232)";
      ctx.fill();
      ctx.stroke();

      // layer1/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(1308.0, 673.2);
      ctx.lineTo(1287.2, 673.3);
      ctx.lineTo(1247.6, 638.4);
      ctx.lineTo(1297.6, 655.2);
      ctx.lineTo(1308.0, 673.2);
      ctx.fillStyle = "rgb(187, 189, 192)";
      ctx.fill();
      ctx.stroke();

      // layer1/Group/Group
      ctx.restore();

      // layer1/Group/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(710.4, 520.2);
      ctx.lineTo(700.0, 571.1);
      ctx.lineTo(689.3, 519.9);
      ctx.lineTo(699.8, 501.9);
      ctx.fillStyle = "rgb(230, 231, 232)";
      ctx.fill();
      ctx.lineWidth = 3.8;
      ctx.stroke();

      // layer1/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(720.9, 501.9);
      ctx.lineTo(760.5, 537.0);
      ctx.lineTo(710.4, 520.2);
      ctx.lineTo(699.9, 502.0);
      ctx.fillStyle = "rgb(187, 189, 192)";
      ctx.fill();
      ctx.stroke();

      // layer1/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(710.3, 483.5);
      ctx.lineTo(760.5, 467.1);
      ctx.lineTo(720.9, 501.9);
      ctx.lineTo(699.9, 502.0);
      ctx.fillStyle = "rgb(209, 210, 212)";
      ctx.fill();
      ctx.stroke();

      // layer1/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(678.7, 501.8);
      ctx.lineTo(639.4, 537.0);
      ctx.lineTo(689.2, 520.1);
      ctx.lineTo(699.8, 502.0);
      ctx.fill();
      ctx.stroke();

      // layer1/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(689.5, 483.9);
      ctx.lineTo(700.0, 432.2);
      ctx.lineTo(710.3, 483.5);
      ctx.lineTo(699.8, 501.9);
      ctx.fillStyle = "rgb(230, 231, 232)";
      ctx.fill();
      ctx.stroke();

      // layer1/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(699.9, 502.0);
      ctx.lineTo(679.0, 502.1);
      ctx.lineTo(639.4, 467.1);
      ctx.lineTo(689.5, 483.9);
      ctx.lineTo(699.9, 502.0);
      ctx.fillStyle = "rgb(187, 189, 192)";
      ctx.fill();
      ctx.stroke();

      // layer1/Group/Path
      ctx.restore();
      ctx.beginPath();
      ctx.moveTo(1500.2, 1080.2);
      ctx.lineTo(420.0, 1080.2);
      ctx.lineTo(420.0, 0.0);
      ctx.lineTo(1500.2, 0.0);
      ctx.lineTo(1500.2, 1080.2);
      ctx.closePath();

      // layer1/Group
      ctx.restore();

      // layer1/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(1920.3, 1080.2);
      ctx.lineTo(0.0, 1080.2);
      ctx.bezierCurveTo(0.0, 1040.8, 0.1, 913.2, 0.1, 913.2);
      ctx.bezierCurveTo(0.1, 913.2, 4.3, 914.4, 14.9, 909.9);
      ctx.bezierCurveTo(49.3, 895.2, 77.3, 899.2, 111.6, 909.5);
      ctx.bezierCurveTo(148.1, 920.4, 185.4, 928.9, 222.6, 937.5);
      ctx.bezierCurveTo(277.8, 950.2, 333.7, 961.0, 390.5, 962.4);
      ctx.bezierCurveTo(398.8, 962.6, 407.1, 962.6, 415.4, 962.5);
      ctx.bezierCurveTo(520.7, 960.2, 622.9, 928.6, 727.7, 919.8);
      ctx.bezierCurveTo(854.4, 909.2, 981.1, 927.2, 1106.4, 944.6);
      ctx.bezierCurveTo(1277.2, 968.3, 1450.7, 970.2, 1622.7, 961.3);
      ctx.bezierCurveTo(1717.6, 956.4, 1827.0, 930.7, 1920.1, 956.8);
      ctx.fillStyle = "rgb(209, 210, 212)";
      ctx.fill();
      ctx.restore();
      ctx.restore();
    }
  
// 7) Snowstorms
	function draw7(ctx) {

      // layer1/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(1052.6, 753.6);
      ctx.bezierCurveTo(1066.7, 736.7, 1075.2, 715.0, 1075.2, 691.2);
      ctx.bezierCurveTo(1075.2, 637.4, 1031.5, 593.7, 977.7, 593.7);
      ctx.bezierCurveTo(923.8, 593.7, 880.1, 637.4, 880.1, 691.2);
      ctx.bezierCurveTo(880.1, 715.0, 888.6, 736.7, 902.7, 753.6);
      ctx.bezierCurveTo(865.9, 778.0, 841.6, 819.7, 841.6, 867.1);
      ctx.bezierCurveTo(841.6, 942.3, 902.5, 1003.2, 977.7, 1003.2);
      ctx.bezierCurveTo(1052.8, 1003.2, 1113.7, 942.3, 1113.7, 867.1);
      ctx.bezierCurveTo(1113.7, 819.7, 1089.4, 778.0, 1052.6, 753.6);
      ctx.closePath();
      ctx.fillStyle = "rgb(187, 189, 192)";
      ctx.fill();
      ctx.lineWidth = 7.5;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.stroke();

      // layer1/Path
      ctx.beginPath();
      ctx.moveTo(1485.2, 323.9);
      ctx.bezierCurveTo(1503.4, 257.8, 1464.6, 189.5, 1398.6, 171.4);
      ctx.bezierCurveTo(1386.0, 167.9, 1373.3, 166.5, 1360.9, 167.0);
      ctx.bezierCurveTo(1354.4, 126.9, 1325.6, 92.2, 1283.9, 80.7);
      ctx.bezierCurveTo(1245.1, 70.1, 1205.8, 82.5, 1179.5, 109.3);
      ctx.bezierCurveTo(1174.3, 105.4, 1168.4, 102.3, 1161.8, 100.4);
      ctx.bezierCurveTo(1141.7, 94.9, 1121.3, 101.9, 1108.4, 116.6);
      ctx.bezierCurveTo(1101.7, 99.6, 1087.5, 85.7, 1068.5, 80.5);
      ctx.bezierCurveTo(1058.0, 77.6, 1047.4, 77.9, 1037.6, 80.5);
      ctx.bezierCurveTo(1029.1, 62.0, 1013.1, 47.1, 992.0, 41.3);
      ctx.bezierCurveTo(954.1, 30.9, 915.0, 53.1, 904.5, 91.0);
      ctx.bezierCurveTo(898.7, 112.2, 903.4, 133.7, 915.1, 150.4);
      ctx.bezierCurveTo(891.9, 159.2, 873.0, 178.3, 865.9, 204.0);
      ctx.bezierCurveTo(854.1, 246.7, 879.2, 291.0, 922.0, 302.7);
      ctx.bezierCurveTo(922.1, 302.7, 922.1, 302.7, 922.2, 302.7);
      ctx.bezierCurveTo(911.9, 343.9, 936.2, 386.0, 977.3, 397.3);
      ctx.bezierCurveTo(984.5, 399.3, 991.8, 399.9, 998.9, 399.8);
      ctx.bezierCurveTo(1013.2, 427.5, 1038.5, 449.5, 1070.9, 458.4);
      ctx.bezierCurveTo(1101.8, 466.9, 1133.1, 462.0, 1158.9, 447.3);
      ctx.bezierCurveTo(1175.6, 470.7, 1200.1, 488.7, 1230.0, 496.9);
      ctx.bezierCurveTo(1296.9, 515.3, 1365.8, 477.9, 1387.6, 412.9);
      ctx.bezierCurveTo(1433.0, 404.7, 1472.1, 371.4, 1485.2, 323.9);
      ctx.closePath();
      ctx.fillStyle = "rgb(147, 149, 151)";
      ctx.fill();
      ctx.stroke();

      // layer1/Path
      ctx.beginPath();
      ctx.moveTo(1021.3, 600.7);
      ctx.bezierCurveTo(1037.2, 600.2, 1055.5, 599.7, 1067.3, 612.2);
      ctx.bezierCurveTo(1078.0, 623.6, 1079.8, 641.9, 1073.5, 655.9);
      ctx.bezierCurveTo(1067.7, 668.9, 1054.9, 676.5, 1040.8, 675.3);
      ctx.bezierCurveTo(1029.0, 674.3, 1017.8, 668.0, 1010.6, 658.7);
      ctx.bezierCurveTo(1004.4, 650.7, 1001.8, 641.0, 999.9, 631.2);
      ctx.bezierCurveTo(999.6, 630.1, 999.4, 628.9, 999.2, 627.8);
      ctx.fillStyle = "rgb(128, 130, 132)";
      ctx.fill();
      ctx.lineCap = "butt";
      ctx.stroke();

      // layer1/Path
      ctx.beginPath();
      ctx.moveTo(935.2, 600.7);
      ctx.bezierCurveTo(919.3, 600.2, 901.0, 599.7, 889.2, 612.2);
      ctx.bezierCurveTo(878.5, 623.6, 876.7, 641.9, 883.1, 655.9);
      ctx.bezierCurveTo(888.9, 668.9, 901.6, 676.5, 915.7, 675.3);
      ctx.bezierCurveTo(927.5, 674.3, 938.7, 668.0, 946.0, 658.7);
      ctx.bezierCurveTo(952.9, 649.8, 956.5, 639.6, 958.5, 628.7);
      ctx.fill();
      ctx.stroke();

      // layer1/Path
      ctx.beginPath();
      ctx.moveTo(1021.3, 570.1);
      ctx.bezierCurveTo(1037.2, 570.7, 1055.5, 571.2, 1067.3, 558.6);
      ctx.bezierCurveTo(1078.0, 547.2, 1079.8, 528.9, 1073.5, 514.9);
      ctx.bezierCurveTo(1067.7, 501.9, 1054.9, 494.3, 1040.8, 495.5);
      ctx.bezierCurveTo(1029.0, 496.5, 1017.8, 502.9, 1010.6, 512.1);
      ctx.bezierCurveTo(1004.4, 520.1, 1001.8, 529.8, 999.9, 539.6);
      ctx.bezierCurveTo(999.6, 540.8, 999.4, 541.9, 999.2, 543.1);
      ctx.fill();
      ctx.stroke();

      // layer1/Path
      ctx.beginPath();
      ctx.moveTo(935.2, 570.1);
      ctx.bezierCurveTo(919.3, 570.7, 901.0, 571.2, 889.2, 558.6);
      ctx.bezierCurveTo(878.5, 547.2, 876.7, 528.9, 883.1, 514.9);
      ctx.bezierCurveTo(888.9, 501.9, 901.6, 494.3, 915.7, 495.5);
      ctx.bezierCurveTo(927.5, 496.5, 938.7, 502.9, 946.0, 512.1);
      ctx.bezierCurveTo(952.9, 521.0, 957.4, 532.2, 959.4, 543.1);
      ctx.fill();
      ctx.stroke();

      // layer1/Path
      ctx.beginPath();
      ctx.moveTo(959.4, 626.1);
      ctx.bezierCurveTo(950.2, 636.4, 941.3, 649.2, 939.4, 663.5);
      ctx.bezierCurveTo(937.6, 677.0, 944.8, 689.7, 955.7, 697.3);
      ctx.bezierCurveTo(979.3, 713.4, 1018.0, 701.3, 1019.1, 671.4);
      ctx.bezierCurveTo(1019.7, 655.7, 1006.8, 639.4, 999.5, 626.1);
      ctx.fillStyle = "rgb(0, 0, 0)";
      ctx.fill();
      ctx.stroke();

      // layer1/Path
      ctx.beginPath();
      ctx.moveTo(959.4, 544.0);
      ctx.bezierCurveTo(950.2, 533.7, 941.3, 520.9, 939.4, 506.6);
      ctx.bezierCurveTo(937.6, 493.1, 944.8, 480.4, 955.7, 472.9);
      ctx.bezierCurveTo(979.3, 456.7, 1018.0, 468.8, 1019.1, 498.7);
      ctx.bezierCurveTo(1019.7, 514.4, 1006.8, 530.7, 999.5, 544.0);
      ctx.fill();
      ctx.stroke();

      // layer1/Path
      ctx.beginPath();
      ctx.moveTo(935.4, 602.6);
      ctx.bezierCurveTo(916.1, 617.6, 890.4, 623.1, 871.7, 602.1);
      ctx.bezierCurveTo(853.3, 581.4, 865.8, 550.6, 893.4, 548.5);
      ctx.bezierCurveTo(909.1, 547.3, 924.4, 555.3, 937.6, 562.7);
      ctx.fill();
      ctx.stroke();

      // layer1/Path
      ctx.beginPath();
      ctx.moveTo(1019.8, 602.6);
      ctx.bezierCurveTo(1039.1, 617.6, 1064.8, 623.1, 1083.5, 602.1);
      ctx.bezierCurveTo(1101.9, 581.4, 1089.4, 550.6, 1061.8, 548.5);
      ctx.bezierCurveTo(1046.1, 547.3, 1030.8, 555.3, 1017.6, 562.7);
      ctx.fill();
      ctx.stroke();

      // layer1/Path
      ctx.beginPath();
      ctx.moveTo(1025.3, 585.0);
      ctx.bezierCurveTo(1025.3, 611.4, 1004.0, 632.8, 977.6, 632.8);
      ctx.bezierCurveTo(951.3, 632.8, 929.9, 611.4, 929.9, 585.0);
      ctx.bezierCurveTo(929.9, 558.7, 951.3, 537.3, 977.6, 537.3);
      ctx.bezierCurveTo(1004.0, 537.3, 1025.3, 558.7, 1025.3, 585.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(187, 189, 192)";
      ctx.fill();
      ctx.lineCap = "round";
      ctx.stroke();

      // layer1/Path
      ctx.beginPath();
      ctx.moveTo(633.8, 313.4);
      ctx.lineTo(599.3, 352.2);
      ctx.lineTo(615.7, 302.6);
      ctx.lineTo(633.8, 292.2);
      ctx.fillStyle = "rgb(230, 231, 232)";
      ctx.fill();
      ctx.lineWidth = 3.8;
      ctx.stroke();

      // layer1/Path
      ctx.beginPath();
      ctx.moveTo(652.1, 302.8);
      ctx.lineTo(668.8, 353.0);
      ctx.lineTo(633.8, 313.4);
      ctx.lineTo(633.8, 292.4);
      ctx.fillStyle = "rgb(187, 189, 192)";
      ctx.fill();
      ctx.stroke();

      // layer1/Path
      ctx.beginPath();
      ctx.moveTo(652.1, 281.6);
      ctx.lineTo(703.8, 292.5);
      ctx.lineTo(652.1, 302.8);
      ctx.lineTo(633.9, 292.4);
      ctx.fillStyle = "rgb(209, 210, 212)";
      ctx.fill();
      ctx.stroke();

      // layer1/Path
      ctx.beginPath();
      ctx.moveTo(615.5, 281.6);
      ctx.lineTo(563.9, 292.5);
      ctx.lineTo(615.5, 302.8);
      ctx.lineTo(633.8, 292.4);
      ctx.fill();
      ctx.stroke();

      // layer1/Path
      ctx.beginPath();
      ctx.moveTo(633.9, 271.5);
      ctx.lineTo(668.8, 231.9);
      ctx.lineTo(652.1, 281.6);
      ctx.lineTo(633.8, 292.2);
      ctx.fillStyle = "rgb(230, 231, 232)";
      ctx.fill();
      ctx.stroke();

      // layer1/Path
      ctx.beginPath();
      ctx.moveTo(633.9, 292.4);
      ctx.lineTo(615.7, 282.0);
      ctx.lineTo(598.9, 231.9);
      ctx.lineTo(633.9, 271.5);
      ctx.lineTo(633.8, 292.4);
      ctx.fillStyle = "rgb(187, 189, 192)";
      ctx.fill();
      ctx.stroke();

      // layer1/Path
      ctx.beginPath();
      ctx.moveTo(751.6, 528.4);
      ctx.lineTo(717.1, 567.2);
      ctx.lineTo(733.4, 517.7);
      ctx.lineTo(751.5, 507.2);
      ctx.fillStyle = "rgb(230, 231, 232)";
      ctx.fill();
      ctx.stroke();

      // layer1/Path
      ctx.beginPath();
      ctx.moveTo(769.9, 517.8);
      ctx.lineTo(786.5, 568.0);
      ctx.lineTo(751.6, 528.4);
      ctx.lineTo(751.6, 507.4);
      ctx.fillStyle = "rgb(187, 189, 192)";
      ctx.fill();
      ctx.stroke();

      // layer1/Path
      ctx.beginPath();
      ctx.moveTo(769.9, 496.7);
      ctx.lineTo(821.5, 507.5);
      ctx.lineTo(769.9, 517.8);
      ctx.lineTo(751.6, 507.4);
      ctx.fillStyle = "rgb(209, 210, 212)";
      ctx.fill();
      ctx.stroke();

      // layer1/Path
      ctx.beginPath();
      ctx.moveTo(733.3, 496.6);
      ctx.lineTo(681.6, 507.5);
      ctx.lineTo(733.3, 517.8);
      ctx.lineTo(751.5, 507.4);
      ctx.fill();
      ctx.stroke();

      // layer1/Path
      ctx.beginPath();
      ctx.moveTo(751.6, 486.5);
      ctx.lineTo(786.5, 447.0);
      ctx.lineTo(769.9, 496.7);
      ctx.lineTo(751.5, 507.2);
      ctx.fillStyle = "rgb(230, 231, 232)";
      ctx.fill();
      ctx.stroke();

      // layer1/Path
      ctx.beginPath();
      ctx.moveTo(751.6, 507.4);
      ctx.lineTo(733.4, 497.0);
      ctx.lineTo(716.6, 447.0);
      ctx.lineTo(751.6, 486.5);
      ctx.lineTo(751.6, 507.4);
      ctx.fillStyle = "rgb(187, 189, 192)";
      ctx.fill();
      ctx.stroke();

      // layer1/Path
      ctx.beginPath();
      ctx.moveTo(542.2, 629.9);
      ctx.lineTo(507.7, 668.7);
      ctx.lineTo(524.1, 619.1);
      ctx.lineTo(542.1, 608.6);
      ctx.fillStyle = "rgb(230, 231, 232)";
      ctx.fill();
      ctx.stroke();

      // layer1/Path
      ctx.beginPath();
      ctx.moveTo(560.5, 619.2);
      ctx.lineTo(577.2, 669.4);
      ctx.lineTo(542.2, 629.9);
      ctx.lineTo(542.2, 608.8);
      ctx.fillStyle = "rgb(187, 189, 192)";
      ctx.fill();
      ctx.stroke();

      // layer1/Path
      ctx.beginPath();
      ctx.moveTo(560.5, 598.1);
      ctx.lineTo(612.1, 608.9);
      ctx.lineTo(560.5, 619.2);
      ctx.lineTo(542.2, 608.8);
      ctx.fillStyle = "rgb(209, 210, 212)";
      ctx.fill();
      ctx.stroke();

      // layer1/Path
      ctx.beginPath();
      ctx.moveTo(523.9, 598.1);
      ctx.lineTo(472.3, 608.9);
      ctx.lineTo(523.9, 619.2);
      ctx.lineTo(542.1, 608.8);
      ctx.fill();
      ctx.stroke();

      // layer1/Path
      ctx.beginPath();
      ctx.moveTo(542.2, 588.0);
      ctx.lineTo(577.2, 548.4);
      ctx.lineTo(560.5, 598.1);
      ctx.lineTo(542.1, 608.6);
      ctx.fillStyle = "rgb(230, 231, 232)";
      ctx.fill();
      ctx.stroke();

      // layer1/Path
      ctx.beginPath();
      ctx.moveTo(542.2, 608.8);
      ctx.lineTo(524.1, 598.4);
      ctx.lineTo(507.3, 548.4);
      ctx.lineTo(542.2, 588.0);
      ctx.lineTo(542.2, 608.8);
      ctx.fillStyle = "rgb(187, 189, 192)";
      ctx.fill();
      ctx.stroke();

      // layer1/Path
      ctx.beginPath();
      ctx.moveTo(668.8, 828.6);
      ctx.lineTo(634.3, 867.5);
      ctx.lineTo(650.7, 817.9);
      ctx.lineTo(668.7, 807.4);
      ctx.fillStyle = "rgb(230, 231, 232)";
      ctx.fill();
      ctx.stroke();

      // layer1/Path
      ctx.beginPath();
      ctx.moveTo(687.1, 818.0);
      ctx.lineTo(703.8, 868.2);
      ctx.lineTo(668.8, 828.6);
      ctx.lineTo(668.8, 807.6);
      ctx.fillStyle = "rgb(187, 189, 192)";
      ctx.fill();
      ctx.stroke();

      // layer1/Path
      ctx.beginPath();
      ctx.moveTo(687.1, 796.8);
      ctx.lineTo(738.7, 807.7);
      ctx.lineTo(687.1, 818.0);
      ctx.lineTo(668.8, 807.6);
      ctx.fillStyle = "rgb(209, 210, 212)";
      ctx.fill();
      ctx.stroke();

      // layer1/Path
      ctx.beginPath();
      ctx.moveTo(650.5, 796.8);
      ctx.lineTo(598.9, 807.7);
      ctx.lineTo(650.5, 818.0);
      ctx.lineTo(668.7, 807.6);
      ctx.fill();
      ctx.stroke();

      // layer1/Path
      ctx.beginPath();
      ctx.moveTo(668.8, 786.7);
      ctx.lineTo(703.7, 747.2);
      ctx.lineTo(687.1, 796.8);
      ctx.lineTo(668.7, 807.4);
      ctx.fillStyle = "rgb(230, 231, 232)";
      ctx.fill();
      ctx.stroke();

      // layer1/Path
      ctx.beginPath();
      ctx.moveTo(668.8, 807.6);
      ctx.lineTo(650.7, 797.2);
      ctx.lineTo(633.9, 747.2);
      ctx.lineTo(668.8, 786.7);
      ctx.lineTo(668.8, 807.6);
      ctx.fillStyle = "rgb(187, 189, 192)";
      ctx.fill();
      ctx.stroke();

      // layer1/Path
      ctx.beginPath();
      ctx.moveTo(1224.1, 686.2);
      ctx.lineTo(1189.6, 725.0);
      ctx.lineTo(1205.9, 675.4);
      ctx.lineTo(1224.0, 665.0);
      ctx.fillStyle = "rgb(230, 231, 232)";
      ctx.fill();
      ctx.stroke();

      // layer1/Path
      ctx.beginPath();
      ctx.moveTo(1242.4, 675.6);
      ctx.lineTo(1259.0, 725.8);
      ctx.lineTo(1224.1, 686.2);
      ctx.lineTo(1224.1, 665.2);
      ctx.fillStyle = "rgb(187, 189, 192)";
      ctx.fill();
      ctx.stroke();

      // layer1/Path
      ctx.beginPath();
      ctx.moveTo(1242.4, 654.4);
      ctx.lineTo(1294.0, 665.3);
      ctx.lineTo(1242.4, 675.6);
      ctx.lineTo(1224.1, 665.2);
      ctx.fillStyle = "rgb(209, 210, 212)";
      ctx.fill();
      ctx.stroke();

      // layer1/Path
      ctx.beginPath();
      ctx.moveTo(1205.8, 654.4);
      ctx.lineTo(1154.1, 665.3);
      ctx.lineTo(1205.8, 675.6);
      ctx.lineTo(1224.0, 665.2);
      ctx.fill();
      ctx.stroke();

      // layer1/Path
      ctx.beginPath();
      ctx.moveTo(1224.1, 644.3);
      ctx.lineTo(1259.0, 604.8);
      ctx.lineTo(1242.4, 654.4);
      ctx.lineTo(1224.0, 665.0);
      ctx.fillStyle = "rgb(230, 231, 232)";
      ctx.fill();
      ctx.stroke();

      // layer1/Path
      ctx.beginPath();
      ctx.moveTo(1224.1, 665.2);
      ctx.lineTo(1205.9, 654.8);
      ctx.lineTo(1189.1, 604.8);
      ctx.lineTo(1224.1, 644.3);
      ctx.lineTo(1224.1, 665.2);
      ctx.fillStyle = "rgb(187, 189, 192)";
      ctx.fill();
      ctx.stroke();

      // layer1/Path
      ctx.beginPath();
      ctx.moveTo(1425.0, 591.3);
      ctx.lineTo(1390.5, 630.1);
      ctx.lineTo(1406.8, 580.5);
      ctx.lineTo(1424.9, 570.1);
      ctx.fillStyle = "rgb(230, 231, 232)";
      ctx.fill();
      ctx.stroke();

      // layer1/Path
      ctx.beginPath();
      ctx.moveTo(1443.2, 580.6);
      ctx.lineTo(1459.9, 630.9);
      ctx.lineTo(1425.0, 591.3);
      ctx.lineTo(1425.0, 570.2);
      ctx.fillStyle = "rgb(187, 189, 192)";
      ctx.fill();
      ctx.stroke();

      // layer1/Path
      ctx.beginPath();
      ctx.moveTo(1443.2, 559.5);
      ctx.lineTo(1494.9, 570.4);
      ctx.lineTo(1443.2, 580.6);
      ctx.lineTo(1425.0, 570.2);
      ctx.fillStyle = "rgb(209, 210, 212)";
      ctx.fill();
      ctx.stroke();

      // layer1/Path
      ctx.beginPath();
      ctx.moveTo(1406.6, 559.5);
      ctx.lineTo(1355.0, 570.4);
      ctx.lineTo(1406.6, 580.6);
      ctx.lineTo(1424.9, 570.2);
      ctx.fill();
      ctx.stroke();

      // layer1/Path
      ctx.beginPath();
      ctx.moveTo(1459.9, 509.8);
      ctx.lineTo(1443.2, 559.6);
      ctx.lineTo(1424.9, 570.1);
      ctx.lineTo(1424.9, 549.4);
      ctx.lineTo(1459.9, 509.8);
      ctx.closePath();
      ctx.fillStyle = "rgb(230, 231, 232)";
      ctx.fill();
      ctx.stroke();

      // layer1/Path
      ctx.beginPath();
      ctx.moveTo(1425.0, 570.2);
      ctx.lineTo(1406.8, 559.9);
      ctx.lineTo(1390.0, 509.8);
      ctx.lineTo(1425.0, 549.4);
      ctx.lineTo(1425.0, 570.2);
      ctx.fillStyle = "rgb(187, 189, 192)";
      ctx.fill();
      ctx.stroke();

      // layer1/Path
      ctx.beginPath();
      ctx.moveTo(1346.5, 849.5);
      ctx.lineTo(1312.0, 888.4);
      ctx.lineTo(1328.3, 838.8);
      ctx.lineTo(1346.4, 828.3);
      ctx.fillStyle = "rgb(230, 231, 232)";
      ctx.fill();
      ctx.stroke();

      // layer1/Path
      ctx.beginPath();
      ctx.moveTo(1364.8, 838.9);
      ctx.lineTo(1381.4, 889.1);
      ctx.lineTo(1346.5, 849.5);
      ctx.lineTo(1346.5, 828.5);
      ctx.fillStyle = "rgb(187, 189, 192)";
      ctx.fill();
      ctx.stroke();

      // layer1/Path
      ctx.beginPath();
      ctx.moveTo(1364.8, 817.7);
      ctx.lineTo(1416.4, 828.6);
      ctx.lineTo(1364.8, 838.9);
      ctx.lineTo(1346.5, 828.5);
      ctx.fillStyle = "rgb(209, 210, 212)";
      ctx.fill();
      ctx.stroke();

      // layer1/Path
      ctx.beginPath();
      ctx.moveTo(1328.2, 817.7);
      ctx.lineTo(1276.5, 828.6);
      ctx.lineTo(1328.2, 838.9);
      ctx.lineTo(1346.4, 828.5);
      ctx.fill();
      ctx.stroke();

      // layer1/Path
      ctx.beginPath();
      ctx.moveTo(1346.5, 807.6);
      ctx.lineTo(1381.4, 768.1);
      ctx.lineTo(1364.8, 817.7);
      ctx.lineTo(1346.4, 828.3);
      ctx.fillStyle = "rgb(230, 231, 232)";
      ctx.fill();
      ctx.stroke();

      // layer1/Path
      ctx.beginPath();
      ctx.moveTo(1346.5, 828.5);
      ctx.lineTo(1328.3, 818.1);
      ctx.lineTo(1311.5, 768.0);
      ctx.lineTo(1346.5, 807.6);
      ctx.lineTo(1346.5, 828.5);
      ctx.fillStyle = "rgb(187, 189, 192)";
      ctx.fill();
      ctx.stroke();

      // layer1/Path
      ctx.beginPath();
      ctx.moveTo(1528.1, 1080.2);
      ctx.lineTo(448.0, 1080.2);
      ctx.lineTo(448.0, 0.0);
      ctx.lineTo(1528.1, 0.0);
      ctx.lineTo(1528.1, 1080.2);
      ctx.closePath();

      // layer1/Group

      // layer1/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(1920.3, 1080.2);
      ctx.lineTo(0.0, 1080.2);
      ctx.bezierCurveTo(0.0, 1040.8, 0.1, 913.2, 0.1, 913.2);
      ctx.bezierCurveTo(0.1, 913.2, 4.3, 914.4, 14.9, 909.9);
      ctx.bezierCurveTo(49.3, 895.2, 77.3, 899.2, 111.6, 909.5);
      ctx.bezierCurveTo(148.1, 920.4, 185.4, 928.9, 222.6, 937.5);
      ctx.bezierCurveTo(277.8, 950.2, 333.7, 960.9, 390.5, 962.4);
      ctx.bezierCurveTo(398.8, 962.6, 407.1, 962.6, 415.4, 962.5);
      ctx.bezierCurveTo(520.7, 960.2, 622.9, 928.6, 727.7, 919.8);
      ctx.bezierCurveTo(854.4, 909.2, 981.1, 927.2, 1106.4, 944.6);
      ctx.bezierCurveTo(1277.2, 968.3, 1450.7, 970.2, 1622.7, 961.3);
      ctx.bezierCurveTo(1717.6, 956.4, 1827.0, 930.7, 1920.1, 956.8);
      ctx.fillStyle = "rgb(209, 210, 212)";
      ctx.fill();
      ctx.restore();
      ctx.restore();
    }

// 8) Windy
	function draw8(ctx) {

      // layer1/Group
      ctx.save();

      // layer1/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(772.0, 617.7);
      ctx.bezierCurveTo(771.1, 617.8, 770.2, 617.9, 769.3, 617.9);
      ctx.bezierCurveTo(785.0, 620.6, 803.7, 637.6, 816.9, 646.5);
      ctx.bezierCurveTo(834.5, 658.3, 851.6, 670.9, 867.1, 685.4);
      ctx.bezierCurveTo(940.0, 753.6, 960.9, 856.3, 970.6, 952.5);
      ctx.bezierCurveTo(973.5, 980.9, 975.6, 1009.4, 977.8, 1037.9);
      ctx.lineTo(1024.7, 1037.9);
      ctx.bezierCurveTo(1020.5, 984.1, 1014.4, 930.3, 1004.3, 877.3);
      ctx.bezierCurveTo(994.1, 823.1, 981.3, 767.5, 952.9, 720.0);
      ctx.bezierCurveTo(936.7, 692.8, 915.6, 669.2, 892.8, 647.7);
      ctx.bezierCurveTo(875.2, 631.1, 848.6, 599.8, 822.9, 598.6);
      ctx.bezierCurveTo(804.0, 597.7, 790.4, 615.4, 772.0, 617.7);
      ctx.closePath();
      ctx.fillStyle = "rgb(128, 130, 132)";
      ctx.fill();
      ctx.lineWidth = 7.4;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.stroke();

      // layer1/Group/Path
      ctx.beginPath();
      ctx.moveTo(883.5, 643.3);
      ctx.bezierCurveTo(872.2, 631.1, 854.9, 631.3, 839.6, 631.8);
      ctx.bezierCurveTo(835.7, 643.3, 827.7, 652.6, 817.3, 658.2);
      ctx.lineTo(816.8, 658.9);
      ctx.bezierCurveTo(817.0, 660.1, 817.2, 661.2, 817.4, 662.4);
      ctx.bezierCurveTo(819.3, 672.1, 821.8, 681.9, 827.9, 689.8);
      ctx.bezierCurveTo(835.0, 699.1, 846.0, 705.5, 857.5, 706.5);
      ctx.bezierCurveTo(871.4, 707.7, 883.8, 700.0, 889.5, 687.1);
      ctx.bezierCurveTo(895.7, 673.1, 894.0, 654.8, 883.5, 643.3);
      ctx.closePath();
      ctx.fill();
      ctx.lineCap = "butt";
      ctx.stroke();

      // layer1/Group/Path
      ctx.beginPath();
      ctx.moveTo(569.3, 790.7);
      ctx.bezierCurveTo(554.0, 790.2, 536.5, 790.0, 525.2, 802.3);
      ctx.bezierCurveTo(514.7, 813.7, 513.0, 832.0, 519.1, 846.0);
      ctx.bezierCurveTo(524.9, 859.0, 537.3, 866.6, 551.2, 865.4);
      ctx.bezierCurveTo(562.7, 864.4, 573.7, 858.0, 580.8, 848.8);
      ctx.bezierCurveTo(587.6, 839.9, 591.1, 829.7, 593.1, 818.9);
      ctx.lineTo(591.8, 817.3);
      ctx.bezierCurveTo(581.3, 811.7, 573.2, 802.3, 569.3, 790.7);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // layer1/Group/Path
      ctx.beginPath();
      ctx.moveTo(467.0, 603.1);
      ctx.bezierCurveTo(475.6, 614.3, 489.5, 618.6, 502.7, 614.0);
      ctx.bezierCurveTo(513.6, 610.2, 522.8, 601.3, 527.5, 590.6);
      ctx.bezierCurveTo(531.5, 581.3, 531.7, 571.3, 531.1, 561.4);
      ctx.bezierCurveTo(531.1, 560.5, 531.0, 559.7, 531.0, 558.9);
      ctx.bezierCurveTo(518.5, 556.3, 507.5, 548.6, 500.7, 537.5);
      ctx.bezierCurveTo(486.2, 540.8, 470.3, 545.1, 462.5, 559.2);
      ctx.bezierCurveTo(455.0, 572.9, 457.7, 591.1, 467.0, 603.1);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // layer1/Group/Path
      ctx.beginPath();
      ctx.moveTo(639.7, 408.5);
      ctx.bezierCurveTo(631.1, 402.5, 620.7, 397.9, 610.1, 396.5);
      ctx.bezierCurveTo(598.7, 394.9, 586.5, 398.2, 577.6, 405.7);
      ctx.bezierCurveTo(566.9, 414.7, 563.1, 429.1, 567.9, 442.4);
      ctx.bezierCurveTo(573.1, 456.8, 586.9, 468.7, 602.3, 469.3);
      ctx.bezierCurveTo(618.7, 470.0, 631.0, 457.6, 641.5, 446.3);
      ctx.bezierCurveTo(635.8, 434.4, 635.2, 420.7, 639.7, 408.5);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // layer1/Group/Path
      ctx.beginPath();
      ctx.moveTo(760.8, 550.8);
      ctx.bezierCurveTo(766.8, 546.2, 773.6, 543.5, 780.5, 542.3);
      ctx.bezierCurveTo(778.7, 527.4, 778.9, 507.7, 769.6, 495.9);
      ctx.bezierCurveTo(751.3, 472.6, 713.8, 485.9, 704.7, 513.0);
      ctx.bezierCurveTo(700.5, 525.6, 702.3, 540.0, 711.6, 549.8);
      ctx.bezierCurveTo(721.0, 559.6, 734.5, 564.5, 747.2, 567.4);
      ctx.bezierCurveTo(750.4, 561.1, 754.8, 555.3, 760.8, 550.8);
      ctx.closePath();
      ctx.fillStyle = "rgb(0, 0, 0)";
      ctx.fill();
      ctx.stroke();

      // layer1/Group/Path
      ctx.beginPath();
      ctx.moveTo(636.3, 651.0);
      ctx.bezierCurveTo(636.3, 642.8, 638.4, 635.2, 642.0, 628.5);
      ctx.bezierCurveTo(629.1, 621.1, 614.3, 613.3, 599.0, 614.4);
      ctx.bezierCurveTo(572.0, 616.5, 559.7, 647.4, 577.8, 668.0);
      ctx.bezierCurveTo(595.9, 688.8, 620.9, 683.6, 639.7, 668.9);
      ctx.bezierCurveTo(637.5, 663.4, 636.3, 657.3, 636.3, 651.0);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // layer1/Group/Path
      ctx.beginPath();
      ctx.moveTo(763.6, 694.7);
      ctx.bezierCurveTo(758.5, 689.2, 755.1, 682.7, 753.1, 675.9);
      ctx.bezierCurveTo(740.0, 676.5, 725.9, 678.9, 715.0, 686.9);
      ctx.bezierCurveTo(704.2, 694.9, 699.9, 708.8, 702.0, 721.9);
      ctx.bezierCurveTo(706.3, 750.2, 740.9, 770.0, 762.9, 750.3);
      ctx.bezierCurveTo(774.1, 740.3, 777.2, 720.9, 781.5, 706.6);
      ctx.bezierCurveTo(775.0, 704.1, 768.8, 700.3, 763.6, 694.7);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // layer1/Group/Path
      ctx.beginPath();
      ctx.moveTo(882.8, 576.8);
      ctx.bezierCurveTo(868.4, 575.7, 854.4, 582.6, 842.1, 589.6);
      ctx.bezierCurveTo(846.1, 596.6, 848.6, 604.6, 848.6, 613.3);
      ctx.bezierCurveTo(848.6, 620.3, 847.0, 626.9, 844.4, 632.9);
      ctx.bezierCurveTo(862.9, 646.2, 886.6, 650.4, 904.1, 630.4);
      ctx.bezierCurveTo(922.1, 609.7, 909.9, 578.9, 882.8, 576.8);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // layer1/Group/Path
      ctx.beginPath();
      ctx.moveTo(842.1, 613.3);
      ctx.bezierCurveTo(842.1, 639.7, 821.2, 661.1, 795.4, 661.1);
      ctx.bezierCurveTo(769.5, 661.1, 748.6, 639.7, 748.6, 613.3);
      ctx.bezierCurveTo(748.6, 587.0, 769.5, 565.6, 795.4, 565.6);
      ctx.bezierCurveTo(821.2, 565.6, 842.1, 587.0, 842.1, 613.3);
      ctx.closePath();
      ctx.fillStyle = "rgb(187, 189, 192)";
      ctx.fill();
      ctx.lineCap = "round";
      ctx.stroke();

      // layer1/Group/Path
      ctx.beginPath();
      ctx.moveTo(1450.3, 492.9);
      ctx.bezierCurveTo(1424.3, 454.8, 1386.5, 405.5, 1336.6, 404.1);
      ctx.bezierCurveTo(1292.7, 402.8, 1268.3, 443.4, 1247.8, 476.7);
      ctx.bezierCurveTo(1236.4, 495.1, 1225.1, 515.6, 1210.8, 531.9);
      ctx.bezierCurveTo(1192.7, 552.4, 1170.1, 570.2, 1144.5, 579.8);
      ctx.bezierCurveTo(1100.6, 596.3, 1051.6, 586.8, 1007.6, 575.9);
      ctx.bezierCurveTo(975.6, 567.9, 944.2, 557.9, 912.6, 548.3);
      ctx.lineWidth = 11.1;
      ctx.stroke();

      // layer1/Group/Path
      ctx.beginPath();
      ctx.moveTo(1457.6, 657.0);
      ctx.bezierCurveTo(1420.6, 614.6, 1365.5, 585.6, 1315.5, 625.5);
      ctx.bezierCurveTo(1284.3, 650.3, 1262.7, 685.5, 1232.5, 711.3);
      ctx.bezierCurveTo(1207.5, 732.7, 1176.4, 749.7, 1143.7, 753.6);
      ctx.bezierCurveTo(1107.2, 758.1, 1071.6, 746.5, 1036.0, 740.7);
      ctx.stroke();

      // layer1/Group/Path
      ctx.beginPath();
      ctx.moveTo(1081.6, 844.5);
      ctx.bezierCurveTo(1111.4, 854.5, 1142.4, 862.1, 1174.0, 860.4);
      ctx.bezierCurveTo(1221.3, 857.9, 1261.9, 838.2, 1302.6, 815.3);
      ctx.bezierCurveTo(1353.1, 787.1, 1412.8, 755.1, 1458.8, 809.5);
      ctx.stroke();

      // layer1/Group/Path
      ctx.beginPath();
      ctx.moveTo(1026.1, 138.4);
      ctx.lineTo(1026.1, 51.5);
      ctx.lineTo(1059.4, 51.5);
      ctx.lineTo(1043.2, 51.5);
      ctx.lineTo(1059.4, 51.5);
      ctx.lineTo(1059.4, 138.4);
      ctx.lineTo(1026.1, 138.4);
      ctx.closePath();
      ctx.fillStyle = "rgb(209, 210, 212)";
      ctx.fill();
      ctx.lineWidth = 7.4;
      ctx.stroke();

      // layer1/Group/Path
      ctx.beginPath();
      ctx.moveTo(1059.4, 252.1);
      ctx.lineTo(1059.4, 339.1);
      ctx.lineTo(1026.1, 339.1);
      ctx.lineTo(1042.4, 339.1);
      ctx.lineTo(1026.1, 339.1);
      ctx.lineTo(1026.1, 252.1);
      ctx.fill();
      ctx.stroke();

      // layer1/Group/Path
      ctx.beginPath();
      ctx.moveTo(1098.2, 178.4);
      ctx.lineTo(1183.4, 178.4);
      ctx.lineTo(1183.4, 212.4);
      ctx.lineTo(1183.4, 195.8);
      ctx.lineTo(1183.4, 212.4);
      ctx.lineTo(1098.2, 212.4);
      ctx.fill();
      ctx.stroke();

      // layer1/Group/Path
      ctx.beginPath();
      ctx.moveTo(986.8, 212.4);
      ctx.lineTo(901.6, 212.4);
      ctx.lineTo(901.6, 178.4);
      ctx.lineTo(986.8, 178.4);
      ctx.fill();
      ctx.stroke();

      // layer1/Group/Path
      ctx.beginPath();
      ctx.moveTo(1014.4, 246.4);
      ctx.lineTo(954.2, 307.9);
      ctx.lineTo(930.6, 283.8);
      ctx.lineTo(942.1, 295.6);
      ctx.lineTo(930.6, 283.8);
      ctx.lineTo(990.8, 222.4);
      ctx.fillStyle = "rgb(230, 231, 232)";
      ctx.fill();
      ctx.stroke();

      // layer1/Group/Path
      ctx.beginPath();
      ctx.moveTo(1069.4, 142.5);
      ctx.lineTo(1129.6, 81.0);
      ctx.lineTo(1153.2, 105.1);
      ctx.lineTo(1141.7, 93.4);
      ctx.lineTo(1153.2, 105.1);
      ctx.lineTo(1092.9, 166.6);
      ctx.fill();
      ctx.stroke();

      // layer1/Group/Path
      ctx.beginPath();
      ctx.moveTo(1015.6, 141.9);
      ctx.lineTo(955.4, 80.5);
      ctx.lineTo(931.8, 104.5);
      ctx.lineTo(943.3, 92.8);
      ctx.lineTo(931.8, 104.5);
      ctx.lineTo(992.1, 166.0);
      ctx.fill();
      ctx.stroke();

      // layer1/Group/Path
      ctx.beginPath();
      ctx.moveTo(1071.8, 247.6);
      ctx.lineTo(1132.1, 309.0);
      ctx.lineTo(1155.7, 284.9);
      ctx.lineTo(1144.2, 296.7);
      ctx.lineTo(1155.7, 284.9);
      ctx.lineTo(1095.4, 223.5);
      ctx.fill();
      ctx.stroke();

      // layer1/Group/Path
      ctx.beginPath();
      ctx.moveTo(1103.1, 195.4);
      ctx.bezierCurveTo(1103.1, 229.6, 1075.9, 257.3, 1042.4, 257.3);
      ctx.bezierCurveTo(1008.9, 257.3, 981.7, 229.6, 981.7, 195.4);
      ctx.bezierCurveTo(981.7, 161.2, 1008.9, 133.5, 1042.4, 133.5);
      ctx.bezierCurveTo(1075.9, 133.5, 1103.1, 161.2, 1103.1, 195.4);
      ctx.closePath();
      ctx.fillStyle = "rgb(187, 189, 192)";
      ctx.fill();
      ctx.stroke();

      // layer1/Group/Path
      ctx.beginPath();
      ctx.moveTo(1489.2, 1080.0);
      ctx.lineTo(431.0, 1080.0);
      ctx.lineTo(431.0, 0.0);
      ctx.lineTo(1489.2, 0.0);
      ctx.lineTo(1489.2, 1080.0);
      ctx.closePath();

      // layer1/Group/Path
      ctx.beginPath();
      ctx.moveTo(1489.2, 1080.0);
      ctx.lineTo(431.0, 1080.0);
      ctx.lineTo(431.0, 0.0);
      ctx.lineTo(1489.2, 0.0);
      ctx.lineTo(1489.2, 1080.0);
      ctx.closePath();

      // layer1/Group
      ctx.restore();

      // layer1/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(1920.3, 1080.2);
      ctx.lineTo(0.0, 1080.2);
      ctx.bezierCurveTo(0.0, 1040.8, 0.1, 913.2, 0.1, 913.2);
      ctx.bezierCurveTo(0.1, 913.2, 4.3, 914.4, 14.9, 909.9);
      ctx.bezierCurveTo(49.3, 895.2, 77.3, 899.3, 111.6, 909.5);
      ctx.bezierCurveTo(148.1, 920.4, 185.4, 928.9, 222.6, 937.5);
      ctx.bezierCurveTo(277.8, 950.2, 333.7, 961.0, 390.5, 962.4);
      ctx.bezierCurveTo(398.8, 962.6, 407.1, 962.6, 415.4, 962.5);
      ctx.bezierCurveTo(520.7, 960.2, 622.9, 928.6, 727.7, 919.8);
      ctx.bezierCurveTo(854.4, 909.2, 981.1, 927.2, 1106.4, 944.6);
      ctx.bezierCurveTo(1277.2, 968.3, 1450.7, 970.3, 1622.7, 961.3);
      ctx.bezierCurveTo(1717.6, 956.4, 1827.0, 930.7, 1920.1, 956.8);
      ctx.fill();
      ctx.restore();
      ctx.restore();
    }

// 9) Raining cats and dogs
	function draw9(ctx) {

      // layer1/Group
      ctx.save();

      // layer1/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(909.6, 1044.7);
      ctx.bezierCurveTo(910.3, 993.6, 924.4, 943.3, 924.1, 892.0);
      ctx.bezierCurveTo(923.9, 850.3, 911.5, 786.8, 863.0, 775.7);
      ctx.bezierCurveTo(838.6, 770.1, 808.2, 779.1, 789.6, 795.3);
      ctx.lineTo(777.4, 764.6);
      ctx.bezierCurveTo(805.6, 733.8, 855.3, 734.7, 891.7, 749.0);
      ctx.bezierCurveTo(942.6, 769.2, 956.6, 829.4, 959.8, 878.4);
      ctx.bezierCurveTo(963.4, 934.1, 954.5, 989.2, 953.7, 1044.7);
      ctx.lineTo(909.6, 1044.7);
      ctx.closePath();
      ctx.fillStyle = "rgb(128, 130, 132)";
      ctx.fill();
      ctx.lineWidth = 7.5;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.stroke();

      // layer1/Group/Path
      ctx.beginPath();
      ctx.moveTo(790.3, 807.9);
      ctx.bezierCurveTo(806.1, 807.4, 824.4, 806.9, 836.2, 819.4);
      ctx.bezierCurveTo(847.0, 830.9, 848.7, 849.2, 842.4, 863.2);
      ctx.bezierCurveTo(836.6, 876.1, 823.9, 883.8, 809.7, 882.5);
      ctx.bezierCurveTo(798.0, 881.6, 786.7, 875.2, 779.5, 865.9);
      ctx.bezierCurveTo(773.3, 858.0, 770.7, 848.2, 768.8, 838.5);
      ctx.bezierCurveTo(768.6, 837.3, 768.4, 836.2, 768.2, 835.0);
      ctx.fill();
      ctx.lineCap = "butt";
      ctx.stroke();

      // layer1/Group/Path
      ctx.beginPath();
      ctx.moveTo(704.1, 807.9);
      ctx.bezierCurveTo(688.3, 807.4, 670.0, 806.9, 658.2, 819.4);
      ctx.bezierCurveTo(647.4, 830.9, 645.7, 849.2, 652.0, 863.2);
      ctx.bezierCurveTo(657.8, 876.1, 670.5, 883.8, 684.7, 882.5);
      ctx.bezierCurveTo(696.4, 881.6, 707.6, 875.2, 714.9, 865.9);
      ctx.bezierCurveTo(721.8, 857.1, 725.5, 846.9, 727.4, 836.0);
      ctx.fill();
      ctx.stroke();

      // layer1/Group/Path
      ctx.beginPath();
      ctx.moveTo(790.3, 777.4);
      ctx.bezierCurveTo(806.1, 777.9, 824.4, 778.4, 836.2, 765.9);
      ctx.bezierCurveTo(847.0, 754.5, 848.7, 736.1, 842.4, 722.2);
      ctx.bezierCurveTo(836.6, 709.2, 823.9, 701.6, 809.7, 702.8);
      ctx.bezierCurveTo(798.0, 703.8, 786.7, 710.1, 779.5, 719.4);
      ctx.bezierCurveTo(773.3, 727.4, 770.7, 737.1, 768.8, 746.8);
      ctx.bezierCurveTo(768.6, 748.0, 768.4, 749.2, 768.2, 750.3);
      ctx.fill();
      ctx.stroke();

      // layer1/Group/Path
      ctx.beginPath();
      ctx.moveTo(704.1, 777.4);
      ctx.bezierCurveTo(688.3, 777.9, 670.0, 778.4, 658.2, 765.9);
      ctx.bezierCurveTo(647.4, 754.5, 645.7, 736.1, 652.0, 722.2);
      ctx.bezierCurveTo(657.8, 709.2, 670.5, 701.6, 684.7, 702.8);
      ctx.bezierCurveTo(696.4, 703.8, 707.6, 710.1, 714.9, 719.4);
      ctx.bezierCurveTo(721.8, 728.3, 726.4, 739.5, 728.3, 750.3);
      ctx.fill();
      ctx.stroke();

      // layer1/Group/Path
      ctx.beginPath();
      ctx.moveTo(728.3, 833.3);
      ctx.bezierCurveTo(719.1, 843.7, 710.2, 856.4, 708.3, 870.8);
      ctx.bezierCurveTo(706.6, 884.3, 713.7, 897.0, 724.7, 904.5);
      ctx.bezierCurveTo(748.2, 920.6, 786.9, 908.6, 788.0, 878.7);
      ctx.bezierCurveTo(788.6, 863.0, 775.7, 846.7, 768.4, 833.3);
      ctx.fillStyle = "rgb(0, 0, 0)";
      ctx.fill();
      ctx.stroke();

      // layer1/Group/Path
      ctx.beginPath();
      ctx.moveTo(728.3, 751.3);
      ctx.bezierCurveTo(719.1, 740.9, 710.2, 728.2, 708.3, 713.9);
      ctx.bezierCurveTo(706.6, 700.3, 713.7, 687.7, 724.7, 680.1);
      ctx.bezierCurveTo(748.2, 664.0, 786.9, 676.1, 788.0, 705.9);
      ctx.bezierCurveTo(788.6, 721.7, 775.7, 737.9, 768.4, 751.3);
      ctx.fill();
      ctx.stroke();

      // layer1/Group/Path
      ctx.beginPath();
      ctx.moveTo(704.3, 809.9);
      ctx.bezierCurveTo(685.1, 824.9, 659.3, 830.3, 640.7, 809.4);
      ctx.bezierCurveTo(622.2, 788.7, 634.7, 757.8, 662.4, 755.8);
      ctx.bezierCurveTo(678.1, 754.6, 693.3, 762.5, 706.5, 770.0);
      ctx.fill();
      ctx.stroke();

      // layer1/Group/Path
      ctx.beginPath();
      ctx.moveTo(788.7, 809.9);
      ctx.bezierCurveTo(808.0, 824.9, 833.8, 830.3, 852.4, 809.4);
      ctx.bezierCurveTo(870.8, 788.7, 858.3, 757.8, 830.7, 755.8);
      ctx.bezierCurveTo(815.0, 754.6, 799.8, 762.5, 786.6, 770.0);
      ctx.fill();
      ctx.stroke();

      // layer1/Group/Path
      ctx.beginPath();
      ctx.moveTo(794.3, 792.3);
      ctx.bezierCurveTo(794.3, 818.6, 772.9, 840.0, 746.6, 840.0);
      ctx.bezierCurveTo(720.2, 840.0, 698.8, 818.6, 698.8, 792.3);
      ctx.bezierCurveTo(698.8, 765.9, 720.2, 744.6, 746.6, 744.6);
      ctx.bezierCurveTo(772.9, 744.6, 794.3, 765.9, 794.3, 792.3);
      ctx.closePath();
      ctx.fillStyle = "rgb(187, 189, 192)";
      ctx.fill();
      ctx.lineCap = "round";
      ctx.stroke();

      // layer1/Group/Path
      ctx.beginPath();
      ctx.moveTo(1484.2, 286.0);
      ctx.bezierCurveTo(1497.8, 207.7, 1445.3, 133.2, 1367.0, 119.6);
      ctx.bezierCurveTo(1352.1, 117.0, 1337.3, 116.9, 1323.0, 118.8);
      ctx.bezierCurveTo(1311.1, 73.2, 1273.9, 36.4, 1224.5, 27.8);
      ctx.bezierCurveTo(1178.5, 19.8, 1134.5, 38.6, 1107.2, 72.4);
      ctx.bezierCurveTo(1100.7, 68.5, 1093.6, 65.6, 1085.7, 64.3);
      ctx.bezierCurveTo(1061.9, 60.1, 1039.1, 70.5, 1025.9, 88.8);
      ctx.bezierCurveTo(1016.2, 70.0, 998.3, 55.6, 975.8, 51.7);
      ctx.bezierCurveTo(963.3, 49.5, 951.1, 51.1, 940.1, 55.2);
      ctx.bezierCurveTo(928.2, 34.7, 908.1, 19.4, 883.1, 15.0);
      ctx.bezierCurveTo(838.1, 7.2, 795.5, 37.3, 787.6, 82.2);
      ctx.bezierCurveTo(783.3, 107.4, 791.1, 131.6, 806.4, 149.6);
      ctx.bezierCurveTo(780.7, 162.3, 761.0, 186.5, 755.7, 217.0);
      ctx.bezierCurveTo(746.9, 267.7, 780.8, 315.9, 831.5, 324.7);
      ctx.bezierCurveTo(831.6, 324.7, 831.7, 324.7, 831.8, 324.7);
      ctx.bezierCurveTo(824.5, 373.4, 857.2, 419.3, 905.9, 427.7);
      ctx.bezierCurveTo(914.6, 429.2, 922.9, 429.0, 931.2, 428.1);
      ctx.bezierCurveTo(950.8, 458.5, 982.5, 481.0, 1020.9, 487.7);
      ctx.bezierCurveTo(1057.5, 494.1, 1093.2, 485.0, 1121.3, 465.1);
      ctx.bezierCurveTo(1143.2, 490.2, 1173.5, 508.2, 1208.9, 514.3);
      ctx.bezierCurveTo(1288.1, 528.1, 1363.5, 477.2, 1381.4, 399.7);
      ctx.bezierCurveTo(1433.0, 385.1, 1474.4, 342.3, 1484.2, 286.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(147, 149, 151)";
      ctx.fill();
      ctx.stroke();

      // layer1/Group/Path
      ctx.beginPath();
      ctx.moveTo(735.2, 345.2);
      ctx.lineTo(682.3, 462.4);
      ctx.lineWidth = 11.3;
      ctx.stroke();

      // layer1/Group/Path
      ctx.beginPath();
      ctx.moveTo(866.7, 450.9);
      ctx.lineTo(816.7, 582.2);
      ctx.stroke();

      // layer1/Group/Path
      ctx.beginPath();
      ctx.moveTo(1045.6, 529.2);
      ctx.lineTo(1001.8, 648.3);
      ctx.stroke();

      // layer1/Group/Path
      ctx.beginPath();
      ctx.moveTo(1192.8, 610.0);
      ctx.lineTo(1131.1, 789.4);
      ctx.stroke();

      // layer1/Group/Group

      // layer1/Group/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(672.7, 414.0);
      ctx.lineTo(690.1, 389.1);
      ctx.lineTo(692.1, 411.7);
      ctx.fillStyle = "rgb(187, 189, 192)";
      ctx.fill();
      ctx.lineWidth = 3.8;
      ctx.stroke();

      // layer1/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(725.2, 433.8);
      ctx.lineTo(727.9, 403.6);
      ctx.lineTo(712.4, 419.1);
      ctx.fill();
      ctx.stroke();

      // layer1/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(728.1, 469.7);
      ctx.bezierCurveTo(719.8, 492.2, 694.9, 503.8, 672.4, 495.6);
      ctx.bezierCurveTo(649.9, 487.4, 638.2, 462.5, 646.4, 440.0);
      ctx.bezierCurveTo(654.7, 417.5, 679.6, 405.8, 702.1, 414.0);
      ctx.bezierCurveTo(724.6, 422.2, 736.2, 447.2, 728.1, 469.7);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // layer1/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(668.7, 436.0);
      ctx.bezierCurveTo(673.6, 431.4, 684.4, 433.6, 682.4, 441.8);
      ctx.stroke();

      // layer1/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(712.9, 452.1);
      ctx.bezierCurveTo(712.0, 445.4, 702.4, 440.1, 698.6, 447.7);
      ctx.stroke();

      // layer1/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(666.6, 459.3);
      ctx.bezierCurveTo(666.6, 464.9, 667.2, 473.8, 675.2, 471.0);
      ctx.bezierCurveTo(680.9, 469.1, 687.4, 453.5, 685.2, 458.6);
      ctx.bezierCurveTo(683.9, 461.9, 680.2, 466.3, 685.2, 458.6);
      ctx.stroke();

      // layer1/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(686.2, 457.8);
      ctx.bezierCurveTo(683.7, 464.2, 678.1, 466.9, 682.6, 474.0);
      ctx.bezierCurveTo(684.6, 477.1, 688.6, 478.7, 692.1, 477.2);
      ctx.bezierCurveTo(695.9, 475.7, 698.2, 471.6, 700.3, 468.3);
      ctx.stroke();

      // layer1/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(714.3, 472.0);
      ctx.lineTo(739.8, 474.0);
      ctx.stroke();

      // layer1/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(714.6, 481.0);
      ctx.lineTo(735.5, 491.5);
      ctx.stroke();

      // layer1/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(706.8, 484.6);
      ctx.lineTo(730.5, 505.0);
      ctx.stroke();

      // layer1/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(654.7, 448.5);
      ctx.lineTo(633.5, 431.5);
      ctx.stroke();

      // layer1/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(654.7, 456.0);
      ctx.lineTo(618.2, 447.3);
      ctx.stroke();

      // layer1/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(652.2, 462.8);
      ctx.lineTo(619.1, 461.6);
      ctx.stroke();

      // layer1/Group/Group
      ctx.restore();

      // layer1/Group/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(987.8, 606.4);
      ctx.lineTo(1005.1, 581.5);
      ctx.lineTo(1007.2, 604.1);
      ctx.fillStyle = "rgb(187, 189, 192)";
      ctx.fill();
      ctx.lineWidth = 3.8;
      ctx.stroke();

      // layer1/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(1040.3, 626.2);
      ctx.lineTo(1042.9, 596.0);
      ctx.lineTo(1027.4, 611.5);
      ctx.fill();
      ctx.stroke();

      // layer1/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(1043.1, 662.1);
      ctx.bezierCurveTo(1034.8, 684.6, 1010.0, 696.2, 987.4, 688.0);
      ctx.bezierCurveTo(964.9, 679.8, 953.3, 654.9, 961.4, 632.4);
      ctx.bezierCurveTo(969.7, 609.9, 994.6, 598.2, 1017.1, 606.4);
      ctx.bezierCurveTo(1039.6, 614.6, 1051.3, 639.6, 1043.1, 662.1);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // layer1/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(983.7, 628.4);
      ctx.bezierCurveTo(988.7, 623.8, 999.4, 626.0, 997.4, 634.2);
      ctx.stroke();

      // layer1/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(1027.9, 644.5);
      ctx.bezierCurveTo(1027.0, 637.8, 1017.4, 632.5, 1013.6, 640.1);
      ctx.stroke();

      // layer1/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(981.6, 651.7);
      ctx.bezierCurveTo(981.6, 657.3, 982.2, 666.2, 990.2, 663.4);
      ctx.bezierCurveTo(995.9, 661.4, 1002.4, 645.9, 1000.3, 651.0);
      ctx.bezierCurveTo(998.9, 654.3, 995.3, 658.7, 1000.3, 651.0);
      ctx.stroke();

      // layer1/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(1001.2, 650.2);
      ctx.bezierCurveTo(998.7, 656.6, 993.1, 659.3, 997.7, 666.4);
      ctx.bezierCurveTo(999.7, 669.5, 1003.7, 671.0, 1007.2, 669.6);
      ctx.bezierCurveTo(1011.0, 668.1, 1013.2, 664.0, 1015.3, 660.7);
      ctx.stroke();

      // layer1/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(1029.3, 664.4);
      ctx.lineTo(1054.9, 666.4);
      ctx.stroke();

      // layer1/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(1029.6, 673.4);
      ctx.lineTo(1050.5, 683.9);
      ctx.stroke();

      // layer1/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(1021.8, 677.0);
      ctx.lineTo(1045.6, 697.4);
      ctx.stroke();

      // layer1/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(969.7, 640.9);
      ctx.lineTo(948.5, 623.9);
      ctx.stroke();

      // layer1/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(969.7, 648.3);
      ctx.lineTo(933.2, 639.8);
      ctx.stroke();

      // layer1/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(967.2, 655.1);
      ctx.lineTo(934.1, 654.0);
      ctx.stroke();

      // layer1/Group/Group
      ctx.restore();

      // layer1/Group/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(1163.1, 839.4);
      ctx.lineTo(1081.5, 809.7);
      ctx.lineTo(1111.2, 728.1);
      ctx.lineTo(1192.8, 757.8);
      ctx.lineTo(1163.1, 839.4);
      ctx.closePath();
      ctx.fillStyle = "rgb(167, 169, 171)";
      ctx.fill();
      ctx.lineWidth = 4.5;
      ctx.stroke();

      // layer1/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(1183.6, 783.1);
      ctx.bezierCurveTo(1183.6, 789.5, 1183.9, 796.5, 1185.8, 802.7);
      ctx.bezierCurveTo(1187.0, 806.5, 1189.8, 813.1, 1194.8, 810.3);
      ctx.bezierCurveTo(1202.1, 806.2, 1204.2, 791.3, 1205.3, 784.2);
      ctx.bezierCurveTo(1207.0, 774.0, 1208.8, 759.3, 1202.3, 750.3);
      ctx.bezierCurveTo(1196.8, 742.8, 1181.1, 749.0, 1173.4, 750.7);
      ctx.lineTo(1129.9, 734.9);
      ctx.bezierCurveTo(1125.1, 728.6, 1117.1, 713.8, 1108.1, 716.1);
      ctx.bezierCurveTo(1097.3, 718.7, 1089.2, 731.1, 1084.0, 740.0);
      ctx.bezierCurveTo(1080.3, 746.2, 1072.3, 759.0, 1075.3, 766.8);
      ctx.bezierCurveTo(1077.3, 772.1, 1083.6, 768.9, 1087.0, 766.7);
      ctx.bezierCurveTo(1092.5, 763.3, 1098.0, 758.0, 1102.1, 753.1);
      ctx.fill();
      ctx.stroke();

      // layer1/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(1111.2, 767.5);
      ctx.bezierCurveTo(1114.5, 762.4, 1118.2, 759.2, 1124.7, 760.5);
      ctx.bezierCurveTo(1130.2, 761.6, 1134.5, 764.8, 1134.6, 770.7);
      ctx.fill();
      ctx.stroke();

      // layer1/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(1168.5, 788.3);
      ctx.bezierCurveTo(1169.3, 782.3, 1168.4, 777.5, 1162.7, 774.4);
      ctx.bezierCurveTo(1157.7, 771.7, 1152.4, 771.3, 1148.4, 775.8);
      ctx.fill();
      ctx.stroke();

      // layer1/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(1143.0, 793.2);
      ctx.bezierCurveTo(1141.4, 797.7, 1136.3, 800.1, 1131.8, 798.4);
      ctx.bezierCurveTo(1127.3, 796.8, 1124.9, 791.8, 1126.6, 787.2);
      ctx.bezierCurveTo(1128.2, 782.7, 1133.3, 780.3, 1137.8, 782.0);
      ctx.bezierCurveTo(1142.4, 783.7, 1144.7, 788.7, 1143.0, 793.2);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // layer1/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(1131.8, 798.4);
      ctx.bezierCurveTo(1127.7, 803.3, 1124.3, 809.0, 1119.0, 812.8);
      ctx.bezierCurveTo(1115.0, 815.7, 1105.4, 819.7, 1100.6, 816.6);
      ctx.fill();
      ctx.stroke();

      // layer1/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(1131.5, 799.3);
      ctx.bezierCurveTo(1131.5, 805.7, 1130.5, 812.3, 1132.1, 818.6);
      ctx.bezierCurveTo(1133.4, 823.4, 1140.9, 832.6, 1146.6, 833.4);
      ctx.fill();
      ctx.stroke();

      // layer1/Group/Group
      ctx.restore();

      // layer1/Group/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(846.2, 627.5);
      ctx.lineTo(764.6, 597.8);
      ctx.lineTo(794.3, 516.2);
      ctx.lineTo(875.9, 545.9);
      ctx.lineTo(846.2, 627.5);
      ctx.closePath();
      ctx.fillStyle = "rgb(167, 169, 171)";
      ctx.fill();
      ctx.lineWidth = 4.5;
      ctx.stroke();

      // layer1/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(866.7, 571.2);
      ctx.bezierCurveTo(866.7, 577.6, 866.9, 584.6, 868.9, 590.8);
      ctx.bezierCurveTo(870.1, 594.7, 872.8, 601.2, 877.8, 598.4);
      ctx.bezierCurveTo(885.1, 594.3, 887.3, 579.4, 888.4, 572.3);
      ctx.bezierCurveTo(890.1, 562.1, 891.9, 547.4, 885.3, 538.4);
      ctx.bezierCurveTo(879.9, 530.9, 864.2, 537.1, 856.5, 538.8);
      ctx.lineTo(813.0, 523.0);
      ctx.bezierCurveTo(808.2, 516.7, 800.1, 501.9, 791.1, 504.2);
      ctx.bezierCurveTo(780.4, 506.8, 772.3, 519.2, 767.0, 528.1);
      ctx.bezierCurveTo(763.4, 534.3, 755.3, 547.1, 758.3, 554.9);
      ctx.bezierCurveTo(760.4, 560.3, 766.7, 557.0, 770.1, 554.8);
      ctx.bezierCurveTo(775.5, 551.4, 781.1, 546.1, 785.2, 541.2);
      ctx.fill();
      ctx.stroke();

      // layer1/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(794.2, 555.6);
      ctx.bezierCurveTo(797.6, 550.5, 801.3, 547.3, 807.7, 548.6);
      ctx.bezierCurveTo(813.3, 549.8, 817.6, 553.0, 817.7, 558.9);
      ctx.fill();
      ctx.stroke();

      // layer1/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(851.6, 576.5);
      ctx.bezierCurveTo(852.4, 570.4, 851.5, 565.6, 845.8, 562.5);
      ctx.bezierCurveTo(840.8, 559.8, 835.4, 559.5, 831.5, 563.9);
      ctx.fill();
      ctx.stroke();

      // layer1/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(826.1, 581.3);
      ctx.bezierCurveTo(824.5, 585.9, 819.4, 588.2, 814.9, 586.5);
      ctx.bezierCurveTo(810.4, 584.9, 808.0, 579.9, 809.6, 575.3);
      ctx.bezierCurveTo(811.3, 570.8, 816.3, 568.5, 820.9, 570.1);
      ctx.bezierCurveTo(825.4, 571.8, 827.8, 576.8, 826.1, 581.3);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // layer1/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(814.9, 586.5);
      ctx.bezierCurveTo(810.8, 591.4, 807.3, 597.1, 802.0, 600.9);
      ctx.bezierCurveTo(798.0, 603.8, 788.4, 607.8, 783.6, 604.7);
      ctx.fill();
      ctx.stroke();

      // layer1/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(814.6, 587.4);
      ctx.bezierCurveTo(814.6, 593.8, 813.6, 600.4, 815.2, 606.7);
      ctx.bezierCurveTo(816.5, 611.5, 824.0, 620.7, 829.7, 621.5);
      ctx.fill();
      ctx.stroke();

      // layer1/Group/Path
      ctx.restore();
      ctx.beginPath();
      ctx.moveTo(1500.2, 1080.2);
      ctx.lineTo(420.0, 1080.2);
      ctx.lineTo(420.0, 0.0);
      ctx.lineTo(1500.2, 0.0);
      ctx.lineTo(1500.2, 1080.2);
      ctx.closePath();

      // layer1/Group
      ctx.restore();

      // layer1/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(1920.3, 1080.2);
      ctx.lineTo(0.0, 1080.2);
      ctx.bezierCurveTo(0.0, 1040.8, 0.1, 913.2, 0.1, 913.2);
      ctx.bezierCurveTo(0.1, 913.2, 4.3, 914.4, 14.9, 909.9);
      ctx.bezierCurveTo(49.3, 895.2, 77.3, 899.3, 111.6, 909.5);
      ctx.bezierCurveTo(148.1, 920.4, 185.4, 928.9, 222.6, 937.5);
      ctx.bezierCurveTo(277.8, 950.2, 333.7, 961.0, 390.5, 962.4);
      ctx.bezierCurveTo(398.8, 962.6, 407.1, 962.6, 415.4, 962.5);
      ctx.bezierCurveTo(520.7, 960.2, 622.9, 928.6, 727.7, 919.8);
      ctx.bezierCurveTo(854.4, 909.2, 981.1, 927.2, 1106.4, 944.6);
      ctx.bezierCurveTo(1277.2, 968.3, 1450.7, 970.3, 1622.7, 961.3);
      ctx.bezierCurveTo(1717.6, 956.4, 1827.0, 930.7, 1920.1, 956.8);
      ctx.fill();
      ctx.restore();
      ctx.restore();
    }