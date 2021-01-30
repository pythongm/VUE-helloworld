<template>
	<!-- 	<el-row :gutter="20">
		<el-col :span="6">
			<div class="grid-content bg-purple"></div>
		</el-col>
		<el-col :span="6">
			<div class="grid-content bg-purple"></div>
		</el-col>
		<el-col :span="6">
			<div class="grid-content bg-purple"></div>
		</el-col>
		<el-col :span="6">
			<div class="grid-content bg-purple"></div>
		</el-col>
	</el-row> -->
	<div class="books">
		<el-container>
			<el-aside width="500px">
				<div class="block" style="margin-top: 50px;">
					<el-carousel height="250px">
						<el-carousel-item v-for="item in img" :key="item">
							<img :src="item" alt="">
						</el-carousel-item>
					</el-carousel>
				</div>
			</el-aside>
			<el-container>
				<el-header>
					<el-button type="primary" icon="el-icon-search">搜索</el-button>
				</el-header>
				<el-main>
					<el-row>
						<el-button disabled>默认按钮</el-button>
						<el-button type="primary">主要按钮</el-button>
						<el-button type="success">成功按钮</el-button>
						<el-button type="info">信息按钮</el-button>
						<el-button type="warning">警告按钮</el-button>
						<el-button type="danger">危险按钮</el-button>
					</el-row>

					<el-row>
						<el-button plain>朴素按钮</el-button>
						<el-button type="primary" plain>主要按钮</el-button>
						<el-button type="success" plain>成功按钮</el-button>
						<el-button type="info" plain>信息按钮</el-button>
						<el-button type="warning" plain>警告按钮</el-button>
						<el-button type="danger" plain>危险按钮</el-button>
					</el-row>

					<el-row>
						<el-button round>圆角按钮</el-button>
						<el-button type="primary" round>主要按钮</el-button>
						<el-button type="success" round>成功按钮</el-button>
						<el-button type="info" round>信息按钮</el-button>
						<el-button type="warning" round>警告按钮</el-button>
						<el-button type="danger" round>危险按钮</el-button>
					</el-row>

					<el-row>
						<el-button icon="el-icon-search" circle></el-button>
						<el-button type="primary" icon="el-icon-edit" circle></el-button>
						<el-button type="success" icon="el-icon-check" circle></el-button>
						<el-button type="info" icon="el-icon-message" circle></el-button>
						<el-button type="warning" icon="el-icon-star-off" circle></el-button>
						<el-button type="danger" icon="el-icon-delete" circle></el-button>
					</el-row>
				</el-main>
				<el-footer><i class="el-icon-loading"></i></el-footer>
			</el-container>
		</el-container>
		<div>
			<el-link href="https://element.eleme.cn" target="_blank">默认链接</el-link>
			<el-link type="primary">主要链接</el-link>
			<el-link type="success">成功链接</el-link>
			<el-link type="warning">警告链接</el-link>
			<el-link type="danger">危险链接</el-link>
			<el-link type="info" :underline="false">信息链接</el-link>
		</div>
		<div style="background-color: aqua;width: 200px;margin: 0 auto;">
			<el-radio v-model="radio" label="1">男</el-radio>
			<el-radio v-model="radio" label="2">女</el-radio>
		</div>
		<div style="background-color: greenyellow;margin: 0 auto;width: 500px;">
			<div>
				<el-radio-group v-model="radio1">
					<el-radio-button label="上海"></el-radio-button>
					<el-radio-button label="北京"></el-radio-button>
					<el-radio-button label="广州"></el-radio-button>
					<el-radio-button label="深圳"></el-radio-button>
				</el-radio-group>
			</div>
			<div style="margin-top: 20px">
				<el-radio-group v-model="radio2" size="medium">
					<el-radio-button label="上海"></el-radio-button>
					<el-radio-button label="北京"></el-radio-button>
					<el-radio-button label="广州"></el-radio-button>
					<el-radio-button label="深圳"></el-radio-button>
				</el-radio-group>
			</div>
			<div style="margin-top: 20px">
				<el-radio-group v-model="radio3" size="small">
					<el-radio-button label="上海"></el-radio-button>
					<el-radio-button label="北京" disabled></el-radio-button>
					<el-radio-button label="广州"></el-radio-button>
					<el-radio-button label="深圳"></el-radio-button>
				</el-radio-group>
			</div>
			<div style="margin-top: 20px">
				<el-radio-group v-model="radio4" disabled size="mini">
					<el-radio-button label="上海"></el-radio-button>
					<el-radio-button label="北京"></el-radio-button>
					<el-radio-button label="广州"></el-radio-button>
					<el-radio-button label="深圳"></el-radio-button>
				</el-radio-group>
			</div>
		</div>
		<div style="background-color: greenyellow;margin: 50px auto;width: 500px;">
			<div>
				<el-radio v-model="radio1" label="1" border>备选项1</el-radio>
				<el-radio v-model="radio1" label="2" border>备选项2</el-radio>
			</div>
			<div style="margin-top: 20px">
				<el-radio v-model="radio2" label="1" border size="medium">备选项1</el-radio>
				<el-radio v-model="radio2" label="2" border size="medium">备选项2</el-radio>
			</div>
			<div style="margin-top: 20px">
				<el-radio-group v-model="radio3" size="small">
					<el-radio label="1" border>备选项1</el-radio>
					<el-radio label="2" border disabled>备选项2</el-radio>
				</el-radio-group>
			</div>
			<div style="margin-top: 20px">
				<el-radio-group v-model="radio4" size="mini" disabled>
					<el-radio label="1" border>备选项1</el-radio>
					<el-radio label="2" border>备选项2</el-radio>
				</el-radio-group>
			</div>
		</div>
		<div>
			<el-tag :key="tag" v-for="tag in dynamicTags" closable :disable-transitions="false" @close="handleClose(tag)">
				{{tag}}
			</el-tag>
			<el-input class="input-new-tag" v-if="inputVisible" v-model="inputValue" ref="saveTagInput" size="small"
			@keyup.enter.native="handleInputConfirm" @blur="handleInputConfirm">
			</el-input>
			<el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>
		</div>

		<div>
			<el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
			<div style="margin: 15px 0;"></div>
			<el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
				<el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
			</el-checkbox-group>
		</div>
		<el-input v-model="input" placeholder="请输入内容" style="width: 300px;" show-password></el-input>
		<el-input placeholder="请输入内容" v-model="input1" clearable style="width: 300px;"></el-input>
		
	</div>


</template>

<script>
	
	const cityOptions = ['上海', '北京', '广州', '深圳'];
	export default {
		data() {
			return {
				img: [
					require("./358.jpg"),
					require("./b812c8fcc3cec3fdfbda822c16a42038869427b2.jpg"),
					require("./b999a9014c086e067a90965d339d90f30ad1cb0d.jpg")
				],
				radio: '1',
				radio1: '上海',
				radio2: '上海',
				radio3: '上海',
				radio4: '上海',
				dynamicTags: ['标签一', '标签二', '标签三'],
				inputVisible: false,
				inputValue: '',
				checkAll: false,
				checkedCities: ['上海', '北京'],
				cities: cityOptions,
				isIndeterminate: true,
				input: '',
				input1: '',
				
			}
		},
		methods: {
			handleClose(tag) {
				this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
			},

			showInput() {
				this.inputVisible = true;
				this.$nextTick(() => {
					this.$refs.saveTagInput.$refs.input.focus();
				});
			},

			handleInputConfirm() {
				let inputValue = this.inputValue;
				if (inputValue) {
					this.dynamicTags.push(inputValue);
				}
				this.inputVisible = false;
				this.inputValue = '';
			},
			handleCheckAllChange(val) {
				this.checkedCities = val ? cityOptions : [];
				this.isIndeterminate = false;
			},
			handleCheckedCitiesChange(value) {
				let checkedCount = value.length;
				this.checkAll = checkedCount === this.cities.length;
				this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
			}
		}
	}
</script>

<style lang="less">
	.time {
		font-size: 13px;
		color: #999;
	}

	.bottom {
		margin-top: 13px;
		line-height: 12px;
	}

	.button {
		padding: 0;
		float: right;
	}

	.image {
		width: 100%;
		display: block;
	}

	.clearfix:before,
	.clearfix:after {
		display: table;
		content: "";
	}

	.clearfix:after {
		clear: both
	}

	.el-row {
		margin-bottom: 20px;

		&:last-child {
			margin-bottom: 0;
		}
	}

	.el-col {
		border-radius: 4px;
	}

	.bg-purple-dark {
		background: #99a9bf;
	}

	.bg-purple {
		background: #d3dce6;
	}

	.bg-purple-light {
		background: #e5e9f2;
	}

	.grid-content {
		border-radius: 4px;
		min-height: 36px;
	}

	.row-bg {
		padding: 10px 0;
		background-color: #f9fafc;
	}

	.el-header,
	.el-footer {
		background-color: #B3C0D1;
		color: #333;
		text-align: center;
		// line-height: 60px;
	}

	.el-aside {
		background-color: #D3DCE6;
		color: #333;
		text-align: center;
		// line-height: 200px;
	}

	.el-main {
		background-color: #E9EEF3;
		color: #333;
		text-align: center;
		/* line-height: 160px; */
	}

	body>.el-container {
		margin-bottom: 40px;
	}

	.el-container:nth-child(5) .el-aside,
	.el-container:nth-child(6) .el-aside {
		// line-height: 260px;
	}

	.el-container:nth-child(7) .el-aside {
		// line-height: 320px;
	}

	.el-carousel__item h3 {
		color: #475669;
		font-size: 14px;
		opacity: 0.75;
		// line-height: 150px;
		margin: 0;
	}

	.el-carousel__item:nth-child(2n) {
		background-color: #99a9bf;
	}

	.el-carousel__item:nth-child(2n+1) {
		background-color: #d3dce6;
	}

	.el-tag+.el-tag {
		margin-left: 10px;
	}

	.button-new-tag {
		margin-left: 10px;
		height: 32px;
		line-height: 30px;
		padding-top: 0;
		padding-bottom: 0;
	}

	.input-new-tag {
		width: 90px;
		margin-left: 10px;
		vertical-align: bottom;
	}
</style>
