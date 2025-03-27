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
    // Tương tự cho các style khác (streetwear, minimalist, eco, creative)
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
        "<h3>Cảm ơn bạn đã hoàn thành quiz! 🎉</h3><p>Hãy khám phá sản phẩm phù hợp với bạn tại <a href='https://oniiz.vn' target='_blank'>oniiz.vn</a></p>";
      document.getElementById("next-btn").style.display = "none";
    }
  }