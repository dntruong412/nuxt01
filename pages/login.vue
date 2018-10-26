<template>
    <div class="row">
        <div class="col-12 col-sm-5 col-md-3">
            <h1>Login</h1>
            <Message :info='messageInfo' />
            <form>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="username" class="form-control" id="mail" aria-describedby="emailHelp" placeholder="Enter email" value="user1">
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="pass" placeholder="Password" value="123456">
                </div>
                <button class="btn btn-primary" @click="login">Submit</button>
            </form>
        </div>
    </div>
</template>

<script>
    import types from "~/store/types";

    export default {
        data() {
            return {
                messageInfo: {
                    display: false,
                    state: false,
                    message: null
                }
            };
        },
        components: {
            Message: () => import('~/components/message')
        },
        methods: {
            async login(event) {
                event.preventDefault();
                const data = new FormData();
                data.append('mail', document.getElementById("mail").value);
                data.append('pass', document.getElementById("pass").value);
                try {
                    const response = await this.$store.dispatch(types.LOGIN, data);
                    this.messageInfo = {
                        display: true,
                        state: response.status,
                        message: response.message
                    };
                    setTimeout(() => {
                        this.$router.push('/');
                    }, 500);
                } catch(e) {
                    this.messageInfo = {
                        display: true,
                        state: e.status,
                        message: e.message
                    };
                }
            }
        }
    };
</script>
