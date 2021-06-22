<template>
  <div>
    <div class="container">
      <div class="col-12">
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <span class="input-group-text search-class-style" id="basic-addon2"
            >Axtar</span
          >
        </div>
      </div>
      <div class="row">
        <div class="col-4">
          <label for="validationCustom04" class="form-label">Qiymət</label>
          <input type="text" class="form-control" placeholder="Qiymət(Min)" />
        </div>
        <div class="col-4 pt-2">
          <label for="validationCustom04" class="form-label"></label>
          <input type="text" class="form-control" placeholder="Qiymət(Max)" />
        </div>
        <div class="col-4">
          <label for="validationCustom04" class="form-label"
            >Məhsulun Kategoriyası</label
          >
          <select class="form-select" id="validationCustom04" required>
            <option selected disabled value="">Kategoriya</option>
            <option>...</option>
          </select>
          <div class="invalid-feedback">
            Please select a valid state.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.search-class-style {
  cursor: pointer;
  background: #9f9df4 !important;
  border: 1px solid #9f9df4;
}
</style>
