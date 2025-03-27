const quizzes = {
    sport: [
      {
        question: "Bạn thường tập thể thao vào thời điểm nào trong ngày?",
        answers: ["Sáng sớm", "Buổi trưa", "Chiều tối", "Bất cứ lúc nào có thời gian"]
      },
      {
        question: "Khi chọn trang phục, yếu tố nào quan trọng nhất với bạn?",
        answers: ["Độ co giãn và thoải mái", "Tính thoát mồ hôi", "Phù hợp với vận động mạnh", "Kiểu dáng thể thao năng động"]
      },
      {
        question: "Bạn thường mang theo gì khi đi tập?",
        answers: ["Túi thể thao tiện dụng", "Bình nước giữ nhiệt", "Tai nghe chống ồn", "Đồng hồ thông minh"]
      },
      {
        question: "Màu sắc bạn yêu thích trong trang phục thể thao?",
        answers: ["Đen/xám trung tính", "Xanh dương, xanh lá", "Cam, đỏ nổi bật", "Màu pastel nhẹ nhàng"]
      }
    ],
    streetwear: [
        {
            question: "Bạn thường chọn phụ kiện nào khi xuống phố?",
            answers: ["Nón lưỡi trai", "Giày sneaker độc lạ", "Balo/túi chéo thời trang", "Kính mát cá tính"]
        },
        {
            question: "Bạn thích item nào nhất trong outfit streetwear?",
            answers: ["Áo oversize", "Quần cargo", "Hoodie", "Áo khoác bomber"]
        },
        {
            question: "Bạn chọn họa tiết trang phục như thế nào?",
            answers: ["Logo to nổi bật", "Phối màu tương phản", "Đơn sắc nhưng tinh tế", "Họa tiết graphic độc đáo"]
        },
        {
            question: "Phong cách biểu đạt cá tính của bạn là gì?",
            answers: ["Ngầu và lạnh lùng", "Tự tin, không ngại nổi bật", "Cool và phóng khoáng", "Đậm chất hiphop, đường phố"]
        }
    ],
    minimalist: [
        {
            question: "Khi chọn trang phục, bạn ưu tiên:",
            answers: ["Màu trung tính như đen, trắng, be", "Form dáng basic, ít chi tiết", "Chất liệu mịn, không nhăn", "Tối giản nhưng chất lượng cao"]
        },
        {
            question: "Bạn thường mua đồ theo tiêu chí nào?",
            answers: ["Tính ứng dụng cao", "Dễ mix-match", "Mặc được nhiều dịp", "Nhỏ gọn, tiện ích"]
        },
        {
            question: "Kiểu phụ kiện bạn chọn thường là:",
            answers: ["Đồng hồ đơn sắc", "Túi vải canvas trơn", "Giày trắng basic", "Không dùng phụ kiện"]
        },
        {
            question: "Không gian sống/thiết kế bạn yêu thích?",
            answers: ["Phong cách Nhật – Muji", "Scandinavian", "Hiện đại tối giản", "Tone trắng – gỗ"]
        }
    ],
    eco: [
        {
            question: "Khi mua sắm, điều gì khiến bạn quyết định chọn sản phẩm?",
            answers: ["Có chứng nhận thân thiện môi trường", "Bao bì tái chế", "Không thử nghiệm trên động vật", "Làm từ nguyên liệu tự nhiên"]
        },
        {
            question: "Bạn có thói quen nào sau đây?",
            answers: ["Mang túi vải đi mua đồ", "Tái sử dụng chai/lọ", "Ưu tiên đồ second-hand", "Trồng cây trong nhà"]
        },
        {
            question: "Bạn đánh giá cao sản phẩm có yếu tố:",
            answers: ["Handmade", "Được sản xuất địa phương", "Có quy trình bền vững", "Giá trị sử dụng lâu dài"]
        },
        {
            question: "Màu sắc bạn yêu thích:",
            answers: ["Màu đất (nâu, be)", "Xanh lá, xanh mint", "Trắng ngà, kem", "Màu pastel thiên nhiên"]
        }
    ],
    creative: [
        {
            question: "Bạn thể hiện sự sáng tạo qua:",
            answers: ["Cách phối đồ độc lạ", "Tự làm phụ kiện/DIY", "Thiết kế, vẽ vời", "Chụp ảnh, làm nội dung"]
        },
        {
            question: "Phong cách phối đồ bạn yêu thích?",
            answers: ["Layer nhiều lớp", "Phối màu táo bạo", "Thử mix item không liên quan", "Độc đáo theo mood cá nhân"]
        },
        {
            question: "Món đồ thể hiện cá tính sáng tạo của bạn?",
            answers: ["Túi canvas vẽ tay", "Áo in họa tiết lạ", "Giày custom", "Phụ kiện vintage"]
        },
        {
            question: "Nơi truyền cảm hứng cho bạn?",
            answers: ["Triển lãm nghệ thuật", "Pinterest, Instagram", "Đường phố, con người", "Studio cá nhân"]
        }
    ]
};
  
  let currentQuiz = [];
  let currentIndex = 0;
  
  function startQuiz(style) {
    currentQuiz = quizzes[style];
    currentIndex = 0;
    document.querySelector(".style-selection").style.display = "none";
    document.getElementById("quiz-section").style.display = "block";
    showQuestion();
  }
  
  function showQuestion() {
    const quizContainer = document.getElementById("quiz-container");
    const current = currentQuiz[currentIndex];
    if (!current) return;
    quizContainer.innerHTML = `
      <h3>${current.question}</h3>
      <ul>
        ${current.answers
          .map(
            (a) => `<li><label><input type="radio" name="answer"> ${a}</label></li>`
          )
          .join("")}
      </ul>
    `;
  }
  
  function nextQuestion() {
    if (currentIndex < currentQuiz.length - 1) {
      currentIndex++;
      showQuestion();
    } else {
      document.getElementById("quiz-container").innerHTML =
        "<h3>Cảm ơn bạn đã hoàn thành quiz! 🎉</h3><p>Hãy khám phá sản phẩm phù hợp với bạn tại <a href='https://oniiz.vn' target='_blank'>oniiz.vn</a></p></br><p>Trở lại <a href='https://hellothere2004.github.io/'>trang chủ</a></p>";
      document.getElementById("next-btn").style.display = "none";
    }
  }