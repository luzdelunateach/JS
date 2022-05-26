<template>
  <div class="container mb-4">
    <h1>Shop Watcher</h1>
    <div>
      Black Friday sale
      <strike>Was {{ oldDiscount }}%</strike>
      <strong> Now {{ discount }}% OFF</strong>
    </div>
    <br />
    <a class="btn btn-danger" href="#" @click="updateDiscount"
      >Increase Discount!</a
    >
    <h1>Deep Watcher</h1>
    <div>
      <h4>{{ product.label }}</h4>
      <h5>${{ product.price }} (${{ discountDeep }} Off)</h5>
    </div>
    <a class="btn btn-danger" href="#" @click="updatePrice">Reduce Price!</a>
  </div>
</template>
<script>
export default {
  data() {
    return {
      oldDiscount: 0,
      discount: 5,
      discountDeep: 0,
      product: {
        price: 25,
        label: "Blue juice",
      },
    };
  },
  methods: {
    updateDiscount() {
      this.discount = this.discount + 5;
    },
    updatePrice() {
      if (this.product.price < 1) return;
      this.product.price--;
    },
  },
  watch: {
    discount(newValue, oldValue) {
      this.oldDiscount = oldValue;
    },
    "product.price"() {
      this.discountDeep++;
    },
  },
};
</script>
<style lang="scss" scoped>
</style>