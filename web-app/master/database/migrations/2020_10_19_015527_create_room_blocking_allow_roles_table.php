<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRoomBlockingAllowRolesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::connection('camaya_booking_db')->create('room_blocking_allow_roles', function (Blueprint $table) {
            $table->id();
            $table->foreignId('room_reservation_id');
            $table->foreignId('role_id');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::connection('camaya_booking_db')->dropIfExists('room_blocking_allow_roles');
    }
}
