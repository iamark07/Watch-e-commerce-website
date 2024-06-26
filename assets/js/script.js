// search option

let search_btn = document.getElementById("search_btn");

search_btn.addEventListener("click", ()=>{
    document.querySelector(".search_box_container").classList.toggle("search_box_active");
});

// mobile search option
let mob_search_btn = document.getElementById("mob_search_btn");

mob_search_btn.addEventListener("click", ()=>{
    document.querySelector(".mob_search_box_container").classList.toggle("mob_search_box_active");
});


// menu slider function

// open menu funtion

let open_menu_btn = document.getElementById("open_menu_btn");

open_menu_btn.addEventListener("click" , ()=> {
    document.querySelector(".menu_slider").classList.add("open_menu_active");
})

// close menu function

let close_menu_btn = document.getElementById("close_menu_btn");

close_menu_btn.addEventListener("click" , ()=> {
    document.querySelector(".menu_slider").classList.remove("open_menu_active");
})
let show_all_menu_icon = document.querySelector(".show_all_menu_icon");

show_all_menu_icon.addEventListener("click" , ()=> {
    document.querySelector(".mob_all_nav_show").classList.toggle("all_nav_show_hide");
    document.querySelector(".show_all_menu_icon").classList.toggle("show_all_menu_active");
    document.querySelector(".mob_nav_container").classList.toggle("mob_nav_container_active");
});

// show all filter content

document.querySelectorAll(".filter_value_hide_btn").forEach(value => {
    value.addEventListener("click", ()=>{
        let items_parent = value.parentElement;
        let select_element = items_parent.nextElementSibling;
        select_element.classList.toggle("hide_filter_values");
    });
});

// filter option function

function filter_option(){
    document.querySelector(".mob_filter").classList.toggle("show_mob_filter");
    document.querySelector(".mob_filter_sort_container").classList.toggle("fixed_position");

    if (document.querySelector(".mob_filter").classList.contains("show_mob_filter")) {
        document.querySelector(".mob_sort").classList.remove("show_mob_sort");
        document.querySelector(".mob_filter_sort_container").classList.add("fixed_position");
    }

}

// sort option function

function sort_option(){
    document.querySelector(".mob_sort").classList.toggle("show_mob_sort");
    document.querySelector(".mob_filter_sort_container").classList.toggle("fixed_position");

    if (document.querySelector(".mob_sort").classList.contains("show_mob_sort")) {
        document.querySelector(".mob_filter").classList.remove("show_mob_filter");
        document.querySelector(".mob_filter_sort_container").classList.add("fixed_position");
    }
}