package sparkexample;

import java.util.Date;
import static spark.Spark.get;

public class Hello {

    public static void main(String[] args) {
        get("/", (req, res) -> {
            return "hello from java-api: current time: " + new Date();
        });
    }
}