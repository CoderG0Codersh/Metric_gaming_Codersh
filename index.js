$( document ).ready( function ()
{
    // menu bar
    $( "#menu_btn" ).click( function ()
    {
        $( ".sidebar" ).toggleClass( 'show' );

        $( ".menu_btn" ).toggleClass( 'menu_btn_right' );
        $( ".first_line" ).toggleClass( 'd-none' );
        $( ".four_line" ).toggleClass( 'd-none' );
        $( ".second_line" ).toggleClass( 'line_two_cross' );
        $( ".third_line" ).toggleClass( 'line_three_cross' );
    } );

    $( ".sidebar_list" ).click( function ()
    {
        $( '.sidebar' ).toggleClass( 'show' );
        $( ".menu_btn" ).toggleClass( 'menu_btn_right' );
        $( ".first_line" ).toggleClass( 'd-none' );
        $( ".four_line" ).toggleClass( 'd-none' );
        $( ".second_line" ).toggleClass( 'line_two_cross' );
        $( ".third_line" ).toggleClass( 'line_three_cross' );
    } );

    setTimeout( function ()
    {
        $( ".header" ).fadeIn( "slow" );
        $( ".home_content" ).fadeIn( "slow" );
        $( ".contact_us" ).fadeIn( "slow" );
        $( ".product_text" ).fadeIn( "slow" );

    }, 6000 );


    // ranger
    let sections = document.querySelectorAll( "section" );
    let rangeli = document.querySelectorAll( "#ranger ul li" );

    window.addEventListener( 'scroll', () =>
    {
        //ranger on scroll
        let current = '';
        sections.forEach( section =>
        {
            let section_top = section.offsetTop;
            let section_height = section.clientHeight;

            if ( pageYOffset >= section_top )
            {
                current = section.getAttribute( 'id' );

            }
        } );

        rangeli.forEach( li =>
        {
            li.classList.remove( 'active' );
            if ( li.classList.contains( current ) )
            {
                li.classList.add( 'active' );
            }
        } );

        let x = window.scrollY;
        let windows_height = window.innerHeight;

        // Product & services Text
        let product_Services_text = document.getElementById( 'product_scroll_text' );
        let product_Services_text_scroll = product_Services_text.getBoundingClientRect().top;
        if ( windows_height >= product_Services_text_scroll )
        {
            let product_Services_text_value = window.scrollY;
            product_Services_text.style.right = `${ product_Services_text_value }px`;
        }

        // section three horizontal line top
        let sec_three = document.getElementById( 'four_page' );
        let section_height = sec_three.getBoundingClientRect().top;
        $( '.horizontal_line' ).removeClass( 'hori_line_active' );
        if ( x >= section_height )
        {
            let value = window.scrollY - 1500;
            document.getElementById( 'hori_line' ).style.width = `${ value }px`;
        }
        // multi telent plate form bottom line icnreace width
        let multi_platform = document.getElementById( 'four_page' );
        let m_value = multi_platform.offsetHeight;
        console.log( m_value );
        if ( x >= m_value )
        {
            $( ".four_page_horiline_bottom" ).addClass( 'four_page_bottom_line_active' );

        };

        // multi_telent plate form text scroll
        let multi_telent = document.getElementById( 'scroll_text' );
        let multi_telent_scroll_top = multi_telent.getBoundingClientRect().top;
        if ( windows_height >= multi_telent_scroll_top )
        {
            let s_value = window.scrollY - 1915;
            multi_telent.style.right = `${ s_value }px`;

        }
        // custom add text scroll
        let custom_text = document.getElementById( "custom_add_scroll_text" );
        let custom_text_scroll = custom_text.getBoundingClientRect().top;

        if ( windows_height >= custom_text_scroll )
        {
            let value = window.scrollY - 2900;
            custom_text.style.left = `${ value }px`;
        }

        // user interface text
        let userInterfaceTExt = document.getElementById( 'userInterFaceText' );
        let userInterfaceText_scroll = userInterfaceTExt.getBoundingClientRect().top;
        if ( windows_height >= userInterfaceText_scroll )
        {
            let userInter_value = window.scrollY - 4900;
            userInterfaceTExt.style.right = `${ userInter_value }px`;
        }

    } );




} );