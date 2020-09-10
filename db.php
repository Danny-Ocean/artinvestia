<!DOCTYPE html>
<html lang="en">
<head>

  <meta charset="utf-8">
  <title>Artinvest</title>
  <meta content="width=device-width, initial-scale=1.0" name="viewport">
  <meta content="" name="keywords">
  <meta content="" name="description">



  <!-- Google Fonts -->
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,700,700i|Poppins:300,400,500,700" rel="stylesheet">

  <!-- Bootstrap CSS File -->
  <link href="lib/bootstrap/css/bootstrap.min.css" rel="stylesheet">

  <!-- Libraries CSS Files -->
  <link href="lib/font-awesome/css/font-awesome.min.css" rel="stylesheet">
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay" crossorigin="anonymous">
  <link href="lib/animate/animate.min.css" rel="stylesheet">

  <!-- Main Stylesheet File -->
  <link href="css/style.css" rel="stylesheet">

</head>

<body>
<meta name="viewport" content="width=1024">
  <header id="header">
    <div class="container">

      <div id="logo" class="pull-left">
        <!-- <a href="#hero"><img src="img/hand.png" style="width: 10%; height: 10%" alt="" title="" /></img></a> -->
        <!-- Uncomment below if you prefer to use a text logo -->
        <h4><a href="index.php" style="color: white;">art<span style="color: #01ffb8;">investia</span></a></h4>
      </div>

      <nav id="nav-menu-container">
        <ul class="nav-menu">

        </ul>
      </nav><!-- #nav-menu-container -->
    </div>
  </header><!-- #header -->

  <!--==========================
    Hero Section
  ============================-->


  <main id="main">

    <!--==========================
      About Us Section
    ============================-->
    <section id="sy">

  <div class="container m_t_2 ay">
<h3 style="color: black;">newest searchprofiles</h3><br><p>Email id number to <span style="color: blue;">artinvestia@web.de</span> to get searcher Name and Email
<table class="table table-hover table-sm">
  <thead>
    <th>id</th>
      <th>Date & Time</th>
      <th>Painting style</th>
    <th>Size</th>
    <th>Reason</th>
    <th>Interessted in</th>
    <th>Investment Range $</th>
    <th>Searchers Nationality</th>
    <th>Notes</th>
  </thead>
  <tbody>
    <?php
      function id2name($question, $answer) {
        if ($question == 0) {
          if ($answer == "1") {
            return "abstract";
          }
          if ($answer == "2") {
            return "figurative";
          }
          if ($answer == "3") {
            return "photorealism";
          }
          if ($answer == "4") {
            return "pop art";
          }
          if ($answer == "5") {
            return "other";
          }
        }

        if ($question == 1) {
          if ($answer == "1") {
            return "< 50cm";
          }
          if ($answer == "2") {
            return "< 100cm";
          }
          if ($answer == "3") {
            return "< 200";
          }
          if ($answer == "4") {
            return "< 300cm";
          }

        if ($answer == "5") {
          return "> 300cm";
        }

      if ($answer == "6") {
        return "doesn't matter";
      }
        }

        if ($question == 2) {
          if ($answer == "1") {
            return "Collector";
          }
          if ($answer == "2") {
            return "Investor";
          }

          }
          if ($question == 3) {
            if ($answer == "1") {
              return "widely known artists";
            }
            if ($answer == "2") {
              return "young emerging artists";
            }
            if ($answer == "3") {
              return "both";
            }

            }

            if ($question == 4) {
              if ($answer == "1") {
                return "under 1000";
              }
              if ($answer == "2") {
                return "5.000 - 10.000";
              }
              if ($answer == "3") {
                return "10.000 - 30.000";
              }
              if ($answer == "4") {
                return "30.000 - 60.000";
              }
              if ($answer == "5") {
                return "60.000 - 100.000";
              }
              if ($answer == "6") {
                return "100.000 - 150.000";
              }
              if ($answer == "7") {
                return "150.000 - 200.000";
              }
              if ($answer == "8") {
                return "200.000 - 500.000";
              }
              if ($answer == "9") {
                return "500.000 - 1.000.000";
              }
              if ($answer == "10") {
                return "1.000.000 - 5.000.000";
              }

              }





        }



//        DAS HIER AUCH AN ANDERER STELLE ÄNDERN
//                       Host         Benutzername   Passwort                                  Datenbankname
//$db = new mysqli('localhost', 'artinvestia', '12ar6tdetstrdzfugg76t657ghiö,mnjhvhvzj', 'artinvestia')

// Hier einkommentieren für Server
 $db = new mysqli('localhost', 'u855730178_josua', '12ar6tdetstrdzfugg76t657ghi', 'u855730178_galdb');

            /* check connection */
            if ($db->connect_errno) {
                printf("Connect failed: %s\n", $db->connect_error);
                exit();
            }
      $result = $db->query("SELECT id,q1,q2,q3,q4,q5,notes, created_at, nation FROM searches ORDER BY id ASC;"); # ASC / DESC
      //$result =$q->execute();
      while($row = $result->fetch_assoc()) {
        ?>
          <tr>
            <td><?php echo $row['id']; ?></td>
            <td><?php echo $row['created_at']; ?></td>
            <td><?php echo id2name(0, $row['q1']); ?></td>
            <td><?php echo id2name(1, $row['q2']); ?></td>
            <td><?php echo id2name(2, $row['q3']); ?></td>
            <td><?php echo id2name(3, $row['q4']); ?></td>
            <td><?php echo id2name(4, $row['q5']); ?></td>
            <td><?php echo $row['nation']; ?></td>
            <td><?php echo $row['notes']; ?></td>
          </tr>
        <?php
      }
    ?>
  </tbody>
</table>

	</div>



  </div> <!-- END .container -->
      </div>
    </section><!-- #about -->


  </main>

  <!--==========================
    Footer
  ============================-->


  <a href="#" class="back-to-top"><i class="fa fa-chevron-up"></i></a>

  <!-- JavaScript Libraries -->
  <script src="lib/jquery/jquery.min.js"></script>
  <script src="lib/jquery/jquery-migrate.min.js"></script>
  <script src="lib/bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="lib/easing/easing.min.js"></script>
  <script src="lib/wow/wow.min.js"></script>
  <script src="lib/waypoints/waypoints.min.js"></script>
  <script src="lib/counterup/counterup.min.js"></script>
  <script src="lib/superfish/hoverIntent.js"></script>
  <script src="lib/superfish/superfish.min.js"></script>

  <!-- Contact Form JavaScript File -->
  <script src="contactform/contactform.js"></script>

  <!-- Template Main Javascript File -->
  <script src="js/main.js"></script>

</body>
</html>
