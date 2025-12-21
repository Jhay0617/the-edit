import { DollarSign, Layers, Package } from "lucide-react";
import { useInventory } from "../hooks/useInventory";
import { categoryCount, total } from "../utils/helpers";
import { Card, IconWrapper, Label, Value } from "../ui/StatsCardStyles";

function StatsCard() {
  const { displayProducts } = useInventory();

  const totalValue = total(displayProducts);
  const category = categoryCount(displayProducts);
  const totalCategories = Object.keys(category).length;
  return (
    <>
      <Card>
        <IconWrapper>
          <DollarSign size={20} />
        </IconWrapper>
        <div>
          <Label>Inventory Value</Label>
          <Value>${totalValue.toLocaleString()}</Value>
        </div>
      </Card>

      <Card>
        <IconWrapper>
          <Package size={20} />
        </IconWrapper>
        <div>
          <Label>Total Products</Label>
          <Value>{displayProducts.length}</Value>
        </div>
      </Card>

      <Card>
        <IconWrapper>
          <Layers size={20} />
        </IconWrapper>
        <div>
          <Label>Categories</Label>
          <Value>{totalCategories}</Value>
        </div>
      </Card>
    </>
  );
}

export default StatsCard;
