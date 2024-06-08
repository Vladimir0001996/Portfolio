<?php
    $connection = new mysqli("localhost", "root", "root", "travel_agency");
    if ($connection->connect_error) {
        echo "error";
    }
    $id = $_GET['id'];
    if ($id) {
        $sql = "SELECT * FROM `content` WHERE id = $id";
        $result = $connection->query($sql);
        if ($result->num_rows > 0) {
            $row = $result->fetch_assoc();
            echo json_encode($row); 
        } else {
            echo "Запись не найдена";
        }
    }

    // tours page filling 
    $param = $_GET['param'];
    if ($param == 'all') {
        $dbConnection = new PDO('mysql:host=localhost;dbname=travel_agency', 'root', 'root');
        $query = "SELECT * FROM content";
        $statement = $dbConnection->prepare($query);
        $statement->execute();
        $result = $statement->fetchAll(PDO::FETCH_ASSOC);
        header('Content-Type: application/json');
        echo json_encode($result);
    }
    $connection->close();
?>
