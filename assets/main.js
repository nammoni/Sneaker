 // ------------ đóng - mở modal REGISTER-------------- --
        //ba Biến js-click-register được gán bằng biến click register
        //queryselector: lấy 1 cái
        const btn_register = document.querySelectorAll('.js-click-register')
        const modal_register = document.querySelector('.js-modal_register')
        const modalClose_register = document.querySelector('.js-modal-close_register')
        const modalcontain_register = document.querySelector('.js-modal-contain_register')
        //tạo 1 hàm chức năng hiển thị modal Đăng ký (thêm class open vào modal)
        function show_register(){
           modal_register.classList.add('open_register')
        }
        //hàm ẩn modal Đăng ký (gỡ bỏ class open của modal)
        function hide_register(){
           modal_register.classList.remove('open_register')
        }
       // lặp qua từng thẻ button và nghe hành vi click
        for(const buyBtn of btn_register){
            buyBtn.addEventListener('click', show_register)
            console.log(buyBtn)
        }
        //nghe hành vi click vào button close
        modalClose_register.addEventListener('click', hide_register)
        
        //nghe hành vi click khoảng không để tắt modal
        modal_register.addEventListener('click', hide_register)

        //click vào modalcontain nhưng k bị đóng modal
        modalcontain_register.addEventListener('click', function(event){
            event.stopPropagation()
        })
    
    // ------------ đóng - mở modal LOGIN-------------- --
        //ba Biến js-click-register được gán bằng biến click register
        //queryselector: lấy 1 cái
        const btn_login = document.querySelectorAll('.js-click_login')
        const modal_login = document.querySelector('.js-modal_login')
        const modalClose_login = document.querySelector('.js-modal-close_login')
        const modalcontain_login = document.querySelector('.js-modal-contain_login')
        //tạo 1 hàm chức năng hiển thị modal Đăng ký (thêm class open vào modal)
        function show_login(){
           modal_login.classList.add('open_login')

        }
        //hàm ẩn modal Đăng ký (gỡ bỏ class open của modal)
        function hide_login(){
           modal_login.classList.remove('open_login')
        }
       // lặp qua từng thẻ button và nghe hành vi click
        for(const buyBtn of btn_login){
            buyBtn.addEventListener('click', show_login)
        }
        //nghe hành vi click vào button close
        modalClose_login.addEventListener('click', hide_login)
        
        //nghe hành vi click khoảng không để tắt modal
        modal_login.addEventListener('click', hide_login)

        //click vào modalcontain nhưng k bị đóng modal
        modalcontain_login.addEventListener('click', function(event){
            event.stopPropagation()
        })

// ==================== active home-filter/ product===================================
const home_filters = document.querySelectorAll(".home-filter__btn");
const home_products = document.querySelectorAll(".home-product");

home_filters.forEach(function(home_filter, index){
    const home_product = home_products[index];
    home_filter.addEventListener("click", function(){
        document.querySelector(".home-filter__btn.active").classList.remove("active");
        document.querySelector(".home-product.active").classList.remove("active");

        this.classList.add("active");
        home_product.classList.add("active");

    })
});
// ==================== active home-filter-air/ product===================================
const home_filter_airs = document.querySelectorAll(".home-filter__btn-air");
const home_product_airs = document.querySelectorAll(".home-product-air");

home_filter_airs.forEach(function(home_filter_air, index){
    const home_product_air = home_product_airs[index];
    home_filter_air.addEventListener("click", function(){
        document.querySelector(".home-filter__btn-air.active").classList.remove("active");
        document.querySelector(".home-product-air.active").classList.remove("active");

        this.classList.add("active");
        home_product_air.classList.add("active");

    })
});
//====================== tăng giảm số lượng ===========================
var count = 0; 
	const value = document.querySelector("#value"); 
	const btns = document.querySelectorAll(".btnn"); 
	btns.forEach(function (btn) 
				{ btn.addEventListener("click", function (e)
					 { const styles = e.currentTarget.classList; 
					 if (styles.contains("increase")) 
					 	{ count ++; 
						} else if (styles.contains("decrease")) 
							{ count --; } 
							else { count = 0; } 
							if (count > 0) 
							{ value.style.color = "green"; }
							 if (count < 0)
							  { count = 0 }
							  if (count === 0)
							   { value.style.color = "#222"; }
							   value.textContent = count; }); 
                    console.log(btn);

                            });

// ================= active category =============================================
const category_items = document.querySelectorAll(".category-item");

category_items.forEach(function(category_item, index){
    category_item.addEventListener("click", function(){
        document.querySelector(".category-item.active").classList.remove("active");
        this.classList.add("active");
    })
})

//=================================================
function arlet_account(){
    alert("You are not logged in!")
}
// =======================================
function login(){
            var flag = true;
            //email
            var Email = document.getElementById("Email").value.trim();
            var EmailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            if(!EmailFormat.test(Email) || Email.length < 10)
            {
                flag=false;
                document.getElementById("EmailError").innerHTML = "Please check your email again!";
            }
            //pass
            var Pass = document.getElementById("Pass").value.trim();
            if(Pass.length < 5)
            {
                flag=false;
                document.getElementById("PassError").innerHTML = "Password must be longer than 5 characters!";
                
               
            }
           
                

                if(flag==true)
                {
                    sessionStorage.email_user = document.forms["F1"]["Email"].value;
                    location.assign("./index_login.html");
                    
                }
        }
function register(){
            var flag = true;
            //email
            var Email = document.getElementById("reg-Email").value.trim();
            var EmailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            if(!EmailFormat.test(Email) || Email.length < 10)
            {
                flag=false;
                document.getElementById("reg-EmailError").innerHTML = "Please check your email again!";
            }
            //pass
            var Pass = document.getElementById("reg-Pass").value.trim();
            var RePass = document.getElementById("reg-RePass").value.trim();
            if(Pass.length < 5 || Pass == '' || RePass != Pass)
            {
                flag=false;
                document.getElementById("reg-PassError").innerHTML = "Password must be longer than 5 characters!"; 
                document.getElementById("reg-RePassError").innerHTML = "Confirmation password does not match!";               
            }
           
                

                if(flag==true)
                {
                    alert("Create an account successfully, log in to experience it now")
                    ;
                    
                }
        }

        // ========load
    var loader = document.getElementById("preloader");
    window.addEventListener("load", function(){
        loader.style.display = "none";
    })
   