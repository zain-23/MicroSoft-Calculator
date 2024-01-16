import { Button } from "@/components/utils/buttons";
import { CgMathDivide } from "react-icons/cg";
export default function Home() {
  return (
    <div className="grid grid-cols-4">
      <Button>
        <h5>1/x</h5>
      </Button>
      <Button>
        <h5>
          x <sup>2</sup>
        </h5>
      </Button>
      <Button>
        <h5>-</h5>
      </Button>
      <Button>
        <CgMathDivide />
      </Button>
      <Button>
        <h5>7</h5>
      </Button>
      <Button>
        <h5>8</h5>
      </Button>
      <Button>
        <h5>9</h5>
      </Button>
      <Button>
        <h5>x</h5>
      </Button>
      <Button>
        <h5>4</h5>
      </Button>
      <Button>
        <h5>5</h5>
      </Button>
      <Button>
        <h5>6</h5>
      </Button>
      <Button>
        <h5>-</h5>
      </Button>
      <Button>
        <h5>1</h5>
      </Button>
      <Button>
        <h5>2</h5>
      </Button>
      <Button>
        <h5>3</h5>
      </Button>
      <Button>
        <h5>+</h5>
      </Button>
      <Button>
        <h5>00</h5>
      </Button>
      <Button>
        <h5>.</h5>
      </Button>
      <Button>
        <h5>0</h5>
      </Button>
      <Button>
        <h5>=</h5>
      </Button>
    </div>
  );
}
