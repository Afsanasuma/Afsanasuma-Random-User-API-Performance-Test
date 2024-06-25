/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 495.0, "minX": 0.0, "maxY": 21051.0, "series": [{"data": [[0.0, 495.0], [0.1, 495.0], [0.2, 495.0], [0.3, 495.0], [0.4, 495.0], [0.5, 510.0], [0.6, 510.0], [0.7, 510.0], [0.8, 510.0], [0.9, 510.0], [1.0, 513.0], [1.1, 513.0], [1.2, 513.0], [1.3, 513.0], [1.4, 513.0], [1.5, 518.0], [1.6, 518.0], [1.7, 518.0], [1.8, 518.0], [1.9, 518.0], [2.0, 521.0], [2.1, 521.0], [2.2, 521.0], [2.3, 521.0], [2.4, 521.0], [2.5, 521.0], [2.6, 521.0], [2.7, 521.0], [2.8, 521.0], [2.9, 521.0], [3.0, 522.0], [3.1, 522.0], [3.2, 522.0], [3.3, 522.0], [3.4, 522.0], [3.5, 524.0], [3.6, 524.0], [3.7, 524.0], [3.8, 524.0], [3.9, 524.0], [4.0, 525.0], [4.1, 525.0], [4.2, 525.0], [4.3, 525.0], [4.4, 525.0], [4.5, 534.0], [4.6, 534.0], [4.7, 534.0], [4.8, 534.0], [4.9, 534.0], [5.0, 534.0], [5.1, 534.0], [5.2, 534.0], [5.3, 534.0], [5.4, 534.0], [5.5, 535.0], [5.6, 535.0], [5.7, 535.0], [5.8, 535.0], [5.9, 535.0], [6.0, 540.0], [6.1, 540.0], [6.2, 540.0], [6.3, 540.0], [6.4, 540.0], [6.5, 542.0], [6.6, 542.0], [6.7, 542.0], [6.8, 542.0], [6.9, 542.0], [7.0, 546.0], [7.1, 546.0], [7.2, 546.0], [7.3, 546.0], [7.4, 546.0], [7.5, 547.0], [7.6, 547.0], [7.7, 547.0], [7.8, 547.0], [7.9, 547.0], [8.0, 548.0], [8.1, 548.0], [8.2, 548.0], [8.3, 548.0], [8.4, 548.0], [8.5, 550.0], [8.6, 550.0], [8.7, 550.0], [8.8, 550.0], [8.9, 550.0], [9.0, 552.0], [9.1, 552.0], [9.2, 552.0], [9.3, 552.0], [9.4, 552.0], [9.5, 553.0], [9.6, 553.0], [9.7, 553.0], [9.8, 553.0], [9.9, 553.0], [10.0, 556.0], [10.1, 556.0], [10.2, 556.0], [10.3, 556.0], [10.4, 556.0], [10.5, 559.0], [10.6, 559.0], [10.7, 559.0], [10.8, 559.0], [10.9, 559.0], [11.0, 559.0], [11.1, 559.0], [11.2, 559.0], [11.3, 559.0], [11.4, 559.0], [11.5, 562.0], [11.6, 562.0], [11.7, 562.0], [11.8, 562.0], [11.9, 562.0], [12.0, 562.0], [12.1, 562.0], [12.2, 562.0], [12.3, 562.0], [12.4, 562.0], [12.5, 562.0], [12.6, 562.0], [12.7, 562.0], [12.8, 562.0], [12.9, 562.0], [13.0, 562.0], [13.1, 562.0], [13.2, 562.0], [13.3, 562.0], [13.4, 562.0], [13.5, 562.0], [13.6, 562.0], [13.7, 562.0], [13.8, 562.0], [13.9, 562.0], [14.0, 562.0], [14.1, 562.0], [14.2, 562.0], [14.3, 562.0], [14.4, 562.0], [14.5, 563.0], [14.6, 563.0], [14.7, 563.0], [14.8, 563.0], [14.9, 563.0], [15.0, 564.0], [15.1, 564.0], [15.2, 564.0], [15.3, 564.0], [15.4, 564.0], [15.5, 564.0], [15.6, 564.0], [15.7, 564.0], [15.8, 564.0], [15.9, 564.0], [16.0, 566.0], [16.1, 566.0], [16.2, 566.0], [16.3, 566.0], [16.4, 566.0], [16.5, 566.0], [16.6, 566.0], [16.7, 566.0], [16.8, 566.0], [16.9, 566.0], [17.0, 569.0], [17.1, 569.0], [17.2, 569.0], [17.3, 569.0], [17.4, 569.0], [17.5, 570.0], [17.6, 570.0], [17.7, 570.0], [17.8, 570.0], [17.9, 570.0], [18.0, 571.0], [18.1, 571.0], [18.2, 571.0], [18.3, 571.0], [18.4, 571.0], [18.5, 576.0], [18.6, 576.0], [18.7, 576.0], [18.8, 576.0], [18.9, 576.0], [19.0, 579.0], [19.1, 579.0], [19.2, 579.0], [19.3, 579.0], [19.4, 579.0], [19.5, 588.0], [19.6, 588.0], [19.7, 588.0], [19.8, 588.0], [19.9, 588.0], [20.0, 589.0], [20.1, 589.0], [20.2, 589.0], [20.3, 589.0], [20.4, 589.0], [20.5, 591.0], [20.6, 591.0], [20.7, 591.0], [20.8, 591.0], [20.9, 591.0], [21.0, 594.0], [21.1, 594.0], [21.2, 594.0], [21.3, 594.0], [21.4, 594.0], [21.5, 602.0], [21.6, 602.0], [21.7, 602.0], [21.8, 602.0], [21.9, 602.0], [22.0, 610.0], [22.1, 610.0], [22.2, 610.0], [22.3, 610.0], [22.4, 610.0], [22.5, 611.0], [22.6, 611.0], [22.7, 611.0], [22.8, 611.0], [22.9, 611.0], [23.0, 612.0], [23.1, 612.0], [23.2, 612.0], [23.3, 612.0], [23.4, 612.0], [23.5, 613.0], [23.6, 613.0], [23.7, 613.0], [23.8, 613.0], [23.9, 613.0], [24.0, 616.0], [24.1, 616.0], [24.2, 616.0], [24.3, 616.0], [24.4, 616.0], [24.5, 618.0], [24.6, 618.0], [24.7, 618.0], [24.8, 618.0], [24.9, 618.0], [25.0, 621.0], [25.1, 621.0], [25.2, 621.0], [25.3, 621.0], [25.4, 621.0], [25.5, 621.0], [25.6, 621.0], [25.7, 621.0], [25.8, 621.0], [25.9, 621.0], [26.0, 622.0], [26.1, 622.0], [26.2, 622.0], [26.3, 622.0], [26.4, 622.0], [26.5, 622.0], [26.6, 622.0], [26.7, 622.0], [26.8, 622.0], [26.9, 622.0], [27.0, 623.0], [27.1, 623.0], [27.2, 623.0], [27.3, 623.0], [27.4, 623.0], [27.5, 627.0], [27.6, 627.0], [27.7, 627.0], [27.8, 627.0], [27.9, 627.0], [28.0, 627.0], [28.1, 627.0], [28.2, 627.0], [28.3, 627.0], [28.4, 627.0], [28.5, 632.0], [28.6, 632.0], [28.7, 632.0], [28.8, 632.0], [28.9, 632.0], [29.0, 633.0], [29.1, 633.0], [29.2, 633.0], [29.3, 633.0], [29.4, 633.0], [29.5, 633.0], [29.6, 633.0], [29.7, 633.0], [29.8, 633.0], [29.9, 633.0], [30.0, 634.0], [30.1, 634.0], [30.2, 634.0], [30.3, 634.0], [30.4, 634.0], [30.5, 636.0], [30.6, 636.0], [30.7, 636.0], [30.8, 636.0], [30.9, 636.0], [31.0, 637.0], [31.1, 637.0], [31.2, 637.0], [31.3, 637.0], [31.4, 637.0], [31.5, 640.0], [31.6, 640.0], [31.7, 640.0], [31.8, 640.0], [31.9, 640.0], [32.0, 642.0], [32.1, 642.0], [32.2, 642.0], [32.3, 642.0], [32.4, 642.0], [32.5, 642.0], [32.6, 642.0], [32.7, 642.0], [32.8, 642.0], [32.9, 642.0], [33.0, 643.0], [33.1, 643.0], [33.2, 643.0], [33.3, 643.0], [33.4, 643.0], [33.5, 646.0], [33.6, 646.0], [33.7, 646.0], [33.8, 646.0], [33.9, 646.0], [34.0, 651.0], [34.1, 651.0], [34.2, 651.0], [34.3, 651.0], [34.4, 651.0], [34.5, 652.0], [34.6, 652.0], [34.7, 652.0], [34.8, 652.0], [34.9, 652.0], [35.0, 652.0], [35.1, 652.0], [35.2, 652.0], [35.3, 652.0], [35.4, 652.0], [35.5, 656.0], [35.6, 656.0], [35.7, 656.0], [35.8, 656.0], [35.9, 656.0], [36.0, 661.0], [36.1, 661.0], [36.2, 661.0], [36.3, 661.0], [36.4, 661.0], [36.5, 662.0], [36.6, 662.0], [36.7, 662.0], [36.8, 662.0], [36.9, 662.0], [37.0, 665.0], [37.1, 665.0], [37.2, 665.0], [37.3, 665.0], [37.4, 665.0], [37.5, 667.0], [37.6, 667.0], [37.7, 667.0], [37.8, 667.0], [37.9, 667.0], [38.0, 668.0], [38.1, 668.0], [38.2, 668.0], [38.3, 668.0], [38.4, 668.0], [38.5, 669.0], [38.6, 669.0], [38.7, 669.0], [38.8, 669.0], [38.9, 669.0], [39.0, 683.0], [39.1, 683.0], [39.2, 683.0], [39.3, 683.0], [39.4, 683.0], [39.5, 688.0], [39.6, 688.0], [39.7, 688.0], [39.8, 688.0], [39.9, 688.0], [40.0, 716.0], [40.1, 716.0], [40.2, 716.0], [40.3, 716.0], [40.4, 716.0], [40.5, 717.0], [40.6, 717.0], [40.7, 717.0], [40.8, 717.0], [40.9, 717.0], [41.0, 721.0], [41.1, 721.0], [41.2, 721.0], [41.3, 721.0], [41.4, 721.0], [41.5, 722.0], [41.6, 722.0], [41.7, 722.0], [41.8, 722.0], [41.9, 722.0], [42.0, 735.0], [42.1, 735.0], [42.2, 735.0], [42.3, 735.0], [42.4, 735.0], [42.5, 744.0], [42.6, 744.0], [42.7, 744.0], [42.8, 744.0], [42.9, 744.0], [43.0, 744.0], [43.1, 744.0], [43.2, 744.0], [43.3, 744.0], [43.4, 744.0], [43.5, 746.0], [43.6, 746.0], [43.7, 746.0], [43.8, 746.0], [43.9, 746.0], [44.0, 747.0], [44.1, 747.0], [44.2, 747.0], [44.3, 747.0], [44.4, 747.0], [44.5, 748.0], [44.6, 748.0], [44.7, 748.0], [44.8, 748.0], [44.9, 748.0], [45.0, 749.0], [45.1, 749.0], [45.2, 749.0], [45.3, 749.0], [45.4, 749.0], [45.5, 751.0], [45.6, 751.0], [45.7, 751.0], [45.8, 751.0], [45.9, 751.0], [46.0, 752.0], [46.1, 752.0], [46.2, 752.0], [46.3, 752.0], [46.4, 752.0], [46.5, 753.0], [46.6, 753.0], [46.7, 753.0], [46.8, 753.0], [46.9, 753.0], [47.0, 755.0], [47.1, 755.0], [47.2, 755.0], [47.3, 755.0], [47.4, 755.0], [47.5, 755.0], [47.6, 755.0], [47.7, 755.0], [47.8, 755.0], [47.9, 755.0], [48.0, 757.0], [48.1, 757.0], [48.2, 757.0], [48.3, 757.0], [48.4, 757.0], [48.5, 758.0], [48.6, 758.0], [48.7, 758.0], [48.8, 758.0], [48.9, 758.0], [49.0, 759.0], [49.1, 759.0], [49.2, 759.0], [49.3, 759.0], [49.4, 759.0], [49.5, 760.0], [49.6, 760.0], [49.7, 760.0], [49.8, 760.0], [49.9, 760.0], [50.0, 760.0], [50.1, 760.0], [50.2, 760.0], [50.3, 760.0], [50.4, 760.0], [50.5, 760.0], [50.6, 760.0], [50.7, 760.0], [50.8, 760.0], [50.9, 760.0], [51.0, 761.0], [51.1, 761.0], [51.2, 761.0], [51.3, 761.0], [51.4, 761.0], [51.5, 761.0], [51.6, 761.0], [51.7, 761.0], [51.8, 761.0], [51.9, 761.0], [52.0, 762.0], [52.1, 762.0], [52.2, 762.0], [52.3, 762.0], [52.4, 762.0], [52.5, 762.0], [52.6, 762.0], [52.7, 762.0], [52.8, 762.0], [52.9, 762.0], [53.0, 763.0], [53.1, 763.0], [53.2, 763.0], [53.3, 763.0], [53.4, 763.0], [53.5, 763.0], [53.6, 763.0], [53.7, 763.0], [53.8, 763.0], [53.9, 763.0], [54.0, 763.0], [54.1, 763.0], [54.2, 763.0], [54.3, 763.0], [54.4, 763.0], [54.5, 763.0], [54.6, 763.0], [54.7, 763.0], [54.8, 763.0], [54.9, 763.0], [55.0, 765.0], [55.1, 765.0], [55.2, 765.0], [55.3, 765.0], [55.4, 765.0], [55.5, 766.0], [55.6, 766.0], [55.7, 766.0], [55.8, 766.0], [55.9, 766.0], [56.0, 767.0], [56.1, 767.0], [56.2, 767.0], [56.3, 767.0], [56.4, 767.0], [56.5, 768.0], [56.6, 768.0], [56.7, 768.0], [56.8, 768.0], [56.9, 768.0], [57.0, 770.0], [57.1, 770.0], [57.2, 770.0], [57.3, 770.0], [57.4, 770.0], [57.5, 770.0], [57.6, 770.0], [57.7, 770.0], [57.8, 770.0], [57.9, 770.0], [58.0, 770.0], [58.1, 770.0], [58.2, 770.0], [58.3, 770.0], [58.4, 770.0], [58.5, 772.0], [58.6, 772.0], [58.7, 772.0], [58.8, 772.0], [58.9, 772.0], [59.0, 772.0], [59.1, 772.0], [59.2, 772.0], [59.3, 772.0], [59.4, 772.0], [59.5, 773.0], [59.6, 773.0], [59.7, 773.0], [59.8, 773.0], [59.9, 773.0], [60.0, 773.0], [60.1, 773.0], [60.2, 773.0], [60.3, 773.0], [60.4, 773.0], [60.5, 773.0], [60.6, 773.0], [60.7, 773.0], [60.8, 773.0], [60.9, 773.0], [61.0, 777.0], [61.1, 777.0], [61.2, 777.0], [61.3, 777.0], [61.4, 777.0], [61.5, 777.0], [61.6, 777.0], [61.7, 777.0], [61.8, 777.0], [61.9, 777.0], [62.0, 777.0], [62.1, 777.0], [62.2, 777.0], [62.3, 777.0], [62.4, 777.0], [62.5, 777.0], [62.6, 777.0], [62.7, 777.0], [62.8, 777.0], [62.9, 777.0], [63.0, 777.0], [63.1, 777.0], [63.2, 777.0], [63.3, 777.0], [63.4, 777.0], [63.5, 778.0], [63.6, 778.0], [63.7, 778.0], [63.8, 778.0], [63.9, 778.0], [64.0, 779.0], [64.1, 779.0], [64.2, 779.0], [64.3, 779.0], [64.4, 779.0], [64.5, 779.0], [64.6, 779.0], [64.7, 779.0], [64.8, 779.0], [64.9, 779.0], [65.0, 780.0], [65.1, 780.0], [65.2, 780.0], [65.3, 780.0], [65.4, 780.0], [65.5, 780.0], [65.6, 780.0], [65.7, 780.0], [65.8, 780.0], [65.9, 780.0], [66.0, 781.0], [66.1, 781.0], [66.2, 781.0], [66.3, 781.0], [66.4, 781.0], [66.5, 783.0], [66.6, 783.0], [66.7, 783.0], [66.8, 783.0], [66.9, 783.0], [67.0, 783.0], [67.1, 783.0], [67.2, 783.0], [67.3, 783.0], [67.4, 783.0], [67.5, 784.0], [67.6, 784.0], [67.7, 784.0], [67.8, 784.0], [67.9, 784.0], [68.0, 785.0], [68.1, 785.0], [68.2, 785.0], [68.3, 785.0], [68.4, 785.0], [68.5, 786.0], [68.6, 786.0], [68.7, 786.0], [68.8, 786.0], [68.9, 786.0], [69.0, 786.0], [69.1, 786.0], [69.2, 786.0], [69.3, 786.0], [69.4, 786.0], [69.5, 788.0], [69.6, 788.0], [69.7, 788.0], [69.8, 788.0], [69.9, 788.0], [70.0, 788.0], [70.1, 788.0], [70.2, 788.0], [70.3, 788.0], [70.4, 788.0], [70.5, 789.0], [70.6, 789.0], [70.7, 789.0], [70.8, 789.0], [70.9, 789.0], [71.0, 790.0], [71.1, 790.0], [71.2, 790.0], [71.3, 790.0], [71.4, 790.0], [71.5, 791.0], [71.6, 791.0], [71.7, 791.0], [71.8, 791.0], [71.9, 791.0], [72.0, 791.0], [72.1, 791.0], [72.2, 791.0], [72.3, 791.0], [72.4, 791.0], [72.5, 793.0], [72.6, 793.0], [72.7, 793.0], [72.8, 793.0], [72.9, 793.0], [73.0, 794.0], [73.1, 794.0], [73.2, 794.0], [73.3, 794.0], [73.4, 794.0], [73.5, 795.0], [73.6, 795.0], [73.7, 795.0], [73.8, 795.0], [73.9, 795.0], [74.0, 797.0], [74.1, 797.0], [74.2, 797.0], [74.3, 797.0], [74.4, 797.0], [74.5, 798.0], [74.6, 798.0], [74.7, 798.0], [74.8, 798.0], [74.9, 798.0], [75.0, 799.0], [75.1, 799.0], [75.2, 799.0], [75.3, 799.0], [75.4, 799.0], [75.5, 800.0], [75.6, 800.0], [75.7, 800.0], [75.8, 800.0], [75.9, 800.0], [76.0, 801.0], [76.1, 801.0], [76.2, 801.0], [76.3, 801.0], [76.4, 801.0], [76.5, 801.0], [76.6, 801.0], [76.7, 801.0], [76.8, 801.0], [76.9, 801.0], [77.0, 803.0], [77.1, 803.0], [77.2, 803.0], [77.3, 803.0], [77.4, 803.0], [77.5, 806.0], [77.6, 806.0], [77.7, 806.0], [77.8, 806.0], [77.9, 806.0], [78.0, 807.0], [78.1, 807.0], [78.2, 807.0], [78.3, 807.0], [78.4, 807.0], [78.5, 808.0], [78.6, 808.0], [78.7, 808.0], [78.8, 808.0], [78.9, 808.0], [79.0, 812.0], [79.1, 812.0], [79.2, 812.0], [79.3, 812.0], [79.4, 812.0], [79.5, 814.0], [79.6, 814.0], [79.7, 814.0], [79.8, 814.0], [79.9, 814.0], [80.0, 814.0], [80.1, 814.0], [80.2, 814.0], [80.3, 814.0], [80.4, 814.0], [80.5, 821.0], [80.6, 821.0], [80.7, 821.0], [80.8, 821.0], [80.9, 821.0], [81.0, 832.0], [81.1, 832.0], [81.2, 832.0], [81.3, 832.0], [81.4, 832.0], [81.5, 838.0], [81.6, 838.0], [81.7, 838.0], [81.8, 838.0], [81.9, 838.0], [82.0, 842.0], [82.1, 842.0], [82.2, 842.0], [82.3, 842.0], [82.4, 842.0], [82.5, 843.0], [82.6, 843.0], [82.7, 843.0], [82.8, 843.0], [82.9, 843.0], [83.0, 844.0], [83.1, 844.0], [83.2, 844.0], [83.3, 844.0], [83.4, 844.0], [83.5, 846.0], [83.6, 846.0], [83.7, 846.0], [83.8, 846.0], [83.9, 846.0], [84.0, 850.0], [84.1, 850.0], [84.2, 850.0], [84.3, 850.0], [84.4, 850.0], [84.5, 852.0], [84.6, 852.0], [84.7, 852.0], [84.8, 852.0], [84.9, 852.0], [85.0, 853.0], [85.1, 853.0], [85.2, 853.0], [85.3, 853.0], [85.4, 853.0], [85.5, 854.0], [85.6, 854.0], [85.7, 854.0], [85.8, 854.0], [85.9, 854.0], [86.0, 855.0], [86.1, 855.0], [86.2, 855.0], [86.3, 855.0], [86.4, 855.0], [86.5, 856.0], [86.6, 856.0], [86.7, 856.0], [86.8, 856.0], [86.9, 856.0], [87.0, 856.0], [87.1, 856.0], [87.2, 856.0], [87.3, 856.0], [87.4, 856.0], [87.5, 856.0], [87.6, 856.0], [87.7, 856.0], [87.8, 856.0], [87.9, 856.0], [88.0, 858.0], [88.1, 858.0], [88.2, 858.0], [88.3, 858.0], [88.4, 858.0], [88.5, 858.0], [88.6, 858.0], [88.7, 858.0], [88.8, 858.0], [88.9, 858.0], [89.0, 860.0], [89.1, 860.0], [89.2, 860.0], [89.3, 860.0], [89.4, 860.0], [89.5, 861.0], [89.6, 861.0], [89.7, 861.0], [89.8, 861.0], [89.9, 861.0], [90.0, 863.0], [90.1, 863.0], [90.2, 863.0], [90.3, 863.0], [90.4, 863.0], [90.5, 864.0], [90.6, 864.0], [90.7, 864.0], [90.8, 864.0], [90.9, 864.0], [91.0, 866.0], [91.1, 866.0], [91.2, 866.0], [91.3, 866.0], [91.4, 866.0], [91.5, 869.0], [91.6, 869.0], [91.7, 869.0], [91.8, 869.0], [91.9, 869.0], [92.0, 871.0], [92.1, 871.0], [92.2, 871.0], [92.3, 871.0], [92.4, 871.0], [92.5, 872.0], [92.6, 872.0], [92.7, 872.0], [92.8, 872.0], [92.9, 872.0], [93.0, 875.0], [93.1, 875.0], [93.2, 875.0], [93.3, 875.0], [93.4, 875.0], [93.5, 881.0], [93.6, 881.0], [93.7, 881.0], [93.8, 881.0], [93.9, 881.0], [94.0, 881.0], [94.1, 881.0], [94.2, 881.0], [94.3, 881.0], [94.4, 881.0], [94.5, 882.0], [94.6, 882.0], [94.7, 882.0], [94.8, 882.0], [94.9, 882.0], [95.0, 886.0], [95.1, 886.0], [95.2, 886.0], [95.3, 886.0], [95.4, 886.0], [95.5, 888.0], [95.6, 888.0], [95.7, 888.0], [95.8, 888.0], [95.9, 888.0], [96.0, 889.0], [96.1, 889.0], [96.2, 889.0], [96.3, 889.0], [96.4, 889.0], [96.5, 889.0], [96.6, 889.0], [96.7, 889.0], [96.8, 889.0], [96.9, 889.0], [97.0, 891.0], [97.1, 891.0], [97.2, 891.0], [97.3, 891.0], [97.4, 891.0], [97.5, 1059.0], [97.6, 1059.0], [97.7, 1059.0], [97.8, 1059.0], [97.9, 1059.0], [98.0, 1159.0], [98.1, 1159.0], [98.2, 1159.0], [98.3, 1159.0], [98.4, 1159.0], [98.5, 1499.0], [98.6, 1499.0], [98.7, 1499.0], [98.8, 1499.0], [98.9, 1499.0], [99.0, 1617.0], [99.1, 1617.0], [99.2, 1617.0], [99.3, 1617.0], [99.4, 1617.0], [99.5, 21051.0], [99.6, 21051.0], [99.7, 21051.0], [99.8, 21051.0], [99.9, 21051.0]], "isOverall": false, "label": "BOOK API", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 400.0, "maxY": 71.0, "series": [{"data": [[1100.0, 1.0], [600.0, 37.0], [21000.0, 1.0], [1400.0, 1.0], [700.0, 71.0], [800.0, 44.0], [400.0, 1.0], [1600.0, 1.0], [500.0, 42.0], [1000.0, 1.0]], "isOverall": false, "label": "BOOK API", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 21000.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 197.0, "series": [{"data": [[0.0, 1.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 197.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 1.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 1.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 1.0, "minX": 1.71924798E12, "maxY": 1.285714285714286, "series": [{"data": [[1.71924858E12, 1.0], [1.7192481E12, 1.0526315789473684], [1.7192484E12, 1.0], [1.71924846E12, 1.0], [1.71924798E12, 1.0], [1.71924828E12, 1.0], [1.71924834E12, 1.0], [1.71924816E12, 1.285714285714286], [1.71924822E12, 1.0], [1.71924852E12, 1.0], [1.71924804E12, 1.0]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71924858E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 724.8290155440413, "minX": 1.0, "maxY": 3678.8571428571427, "series": [{"data": [[1.0, 724.8290155440413], [2.0, 3678.8571428571427]], "isOverall": false, "label": "BOOK API", "isController": false}, {"data": [[1.0349999999999997, 828.2200000000001]], "isOverall": false, "label": "BOOK API-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 2.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 13.1, "minX": 1.71924798E12, "maxY": 1633.1333333333334, "series": [{"data": [[1.71924858E12, 476.2], [1.7192481E12, 1507.9666666666667], [1.7192484E12, 1587.3333333333333], [1.71924846E12, 1587.3333333333333], [1.71924798E12, 1111.1333333333334], [1.71924828E12, 1587.3333333333333], [1.71924834E12, 1587.3333333333333], [1.71924816E12, 1633.1333333333334], [1.71924822E12, 1587.3333333333333], [1.71924852E12, 1587.3333333333333], [1.71924804E12, 1587.3333333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.71924858E12, 13.1], [1.7192481E12, 41.483333333333334], [1.7192484E12, 43.666666666666664], [1.71924846E12, 43.666666666666664], [1.71924798E12, 30.566666666666666], [1.71924828E12, 43.666666666666664], [1.71924834E12, 43.666666666666664], [1.71924816E12, 43.666666666666664], [1.71924822E12, 43.666666666666664], [1.71924852E12, 43.666666666666664], [1.71924804E12, 43.666666666666664]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71924858E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 659.0999999999999, "minX": 1.71924798E12, "maxY": 1740.2380952380952, "series": [{"data": [[1.71924858E12, 776.0], [1.7192481E12, 724.5789473684212], [1.7192484E12, 740.4000000000001], [1.71924846E12, 722.5], [1.71924798E12, 778.9285714285713], [1.71924828E12, 711.2], [1.71924834E12, 732.5], [1.71924816E12, 1740.2380952380952], [1.71924822E12, 659.0999999999999], [1.71924852E12, 711.2], [1.71924804E12, 711.65]], "isOverall": false, "label": "BOOK API", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71924858E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 659.0000000000001, "minX": 1.71924798E12, "maxY": 778.1428571428572, "series": [{"data": [[1.71924858E12, 776.0], [1.7192481E12, 724.4736842105264], [1.7192484E12, 740.35], [1.71924846E12, 722.3499999999999], [1.71924798E12, 778.1428571428572], [1.71924828E12, 711.2], [1.71924834E12, 732.4499999999999], [1.71924816E12, 737.6666666666666], [1.71924822E12, 659.0000000000001], [1.71924852E12, 710.95], [1.71924804E12, 711.5]], "isOverall": false, "label": "BOOK API", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71924858E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 438.15, "minX": 1.71924798E12, "maxY": 1491.4285714285716, "series": [{"data": [[1.71924858E12, 494.1666666666667], [1.7192481E12, 483.10526315789474], [1.7192484E12, 479.4], [1.71924846E12, 500.3], [1.71924798E12, 520.1428571428571], [1.71924828E12, 474.2], [1.71924834E12, 485.34999999999997], [1.71924816E12, 1491.4285714285716], [1.71924822E12, 438.15], [1.71924852E12, 474.00000000000006], [1.71924804E12, 475.8]], "isOverall": false, "label": "BOOK API", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71924858E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 495.0, "minX": 1.71924798E12, "maxY": 1617.0, "series": [{"data": [[1.71924858E12, 886.0], [1.7192481E12, 872.0], [1.7192484E12, 1159.0], [1.71924846E12, 1617.0], [1.71924798E12, 1499.0], [1.71924828E12, 888.0], [1.71924834E12, 861.0], [1.71924816E12, 889.0], [1.71924822E12, 814.0], [1.71924852E12, 875.0], [1.71924804E12, 889.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.71924858E12, 886.0], [1.7192481E12, 866.0], [1.7192484E12, 797.6], [1.71924846E12, 890.1], [1.71924798E12, 1279.0], [1.71924828E12, 854.5], [1.71924834E12, 856.0], [1.71924816E12, 878.7], [1.71924822E12, 806.9], [1.71924852E12, 867.4000000000001], [1.71924804E12, 880.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.71924858E12, 886.0], [1.7192481E12, 872.0], [1.7192484E12, 1159.0], [1.71924846E12, 1617.0], [1.71924798E12, 1499.0], [1.71924828E12, 888.0], [1.71924834E12, 861.0], [1.71924816E12, 889.0], [1.71924822E12, 814.0], [1.71924852E12, 875.0], [1.71924804E12, 889.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.71924858E12, 886.0], [1.7192481E12, 872.0], [1.7192484E12, 1140.9499999999998], [1.71924846E12, 1580.6999999999994], [1.71924798E12, 1499.0], [1.71924828E12, 886.35], [1.71924834E12, 860.75], [1.71924816E12, 888.6], [1.71924822E12, 813.65], [1.71924852E12, 874.7], [1.71924804E12, 888.6]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.71924858E12, 569.0], [1.7192481E12, 550.0], [1.7192484E12, 524.0], [1.71924846E12, 513.0], [1.71924798E12, 562.0], [1.71924828E12, 495.0], [1.71924834E12, 535.0], [1.71924816E12, 521.0], [1.71924822E12, 534.0], [1.71924852E12, 525.0], [1.71924804E12, 546.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.71924858E12, 810.5], [1.7192481E12, 761.0], [1.7192484E12, 759.5], [1.71924846E12, 638.0], [1.71924798E12, 739.0], [1.71924828E12, 762.5], [1.71924834E12, 759.0], [1.71924816E12, 780.0], [1.71924822E12, 606.0], [1.71924852E12, 747.0], [1.71924804E12, 746.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71924858E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 521.0, "minX": 1.0, "maxY": 21051.0, "series": [{"data": [[1.0, 760.0], [2.0, 521.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[2.0, 21051.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 2.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 0.0, "minX": 1.0, "maxY": 760.0, "series": [{"data": [[1.0, 760.0], [2.0, 521.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[2.0, 0.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 2.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 0.1, "minX": 1.71924798E12, "maxY": 0.3333333333333333, "series": [{"data": [[1.71924858E12, 0.1], [1.7192481E12, 0.3333333333333333], [1.7192484E12, 0.3333333333333333], [1.71924846E12, 0.3333333333333333], [1.71924798E12, 0.23333333333333334], [1.71924828E12, 0.3333333333333333], [1.71924834E12, 0.3333333333333333], [1.71924816E12, 0.3333333333333333], [1.71924822E12, 0.3333333333333333], [1.71924852E12, 0.3333333333333333], [1.71924804E12, 0.3333333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71924858E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.71924798E12, "maxY": 0.3333333333333333, "series": [{"data": [[1.71924858E12, 0.1], [1.7192481E12, 0.31666666666666665], [1.7192484E12, 0.3333333333333333], [1.71924846E12, 0.3333333333333333], [1.71924798E12, 0.23333333333333334], [1.71924828E12, 0.3333333333333333], [1.71924834E12, 0.3333333333333333], [1.71924816E12, 0.3333333333333333], [1.71924822E12, 0.3333333333333333], [1.71924852E12, 0.3333333333333333], [1.71924804E12, 0.3333333333333333]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.71924816E12, 0.016666666666666666]], "isOverall": false, "label": "Non HTTP response code: org.apache.http.conn.HttpHostConnectException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71924858E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.71924798E12, "maxY": 0.3333333333333333, "series": [{"data": [[1.71924816E12, 0.016666666666666666]], "isOverall": false, "label": "BOOK API-failure", "isController": false}, {"data": [[1.71924858E12, 0.1], [1.7192481E12, 0.31666666666666665], [1.7192484E12, 0.3333333333333333], [1.71924846E12, 0.3333333333333333], [1.71924798E12, 0.23333333333333334], [1.71924828E12, 0.3333333333333333], [1.71924834E12, 0.3333333333333333], [1.71924816E12, 0.3333333333333333], [1.71924822E12, 0.3333333333333333], [1.71924852E12, 0.3333333333333333], [1.71924804E12, 0.3333333333333333]], "isOverall": false, "label": "BOOK API-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71924858E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.71924798E12, "maxY": 0.3333333333333333, "series": [{"data": [[1.71924858E12, 0.1], [1.7192481E12, 0.31666666666666665], [1.7192484E12, 0.3333333333333333], [1.71924846E12, 0.3333333333333333], [1.71924798E12, 0.23333333333333334], [1.71924828E12, 0.3333333333333333], [1.71924834E12, 0.3333333333333333], [1.71924816E12, 0.3333333333333333], [1.71924822E12, 0.3333333333333333], [1.71924852E12, 0.3333333333333333], [1.71924804E12, 0.3333333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.71924816E12, 0.016666666666666666]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71924858E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

